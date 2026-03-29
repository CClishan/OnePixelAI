"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SiteConfig, ToolItem } from "@/lib/site-data";
import styles from "./home-shell.module.css";

type HomeShellProps = {
  siteConfig: SiteConfig;
  tools: ToolItem[];
};

type FilterKey = "all" | "tool" | "skill" | "in-progress";

declare global {
  interface Window {
    __ONEPIXELAI_BOOT__?: boolean;
  }
}

const filters: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "tool", label: "Tool" },
  { key: "skill", label: "Skills" },
  { key: "in-progress", label: "In Progress" },
];

function filterTools(tools: ToolItem[], activeFilter: FilterKey) {
  if (activeFilter === "all") {
    return tools;
  }

  return tools.filter((tool) => tool.tags.includes(activeFilter));
}

function rowTone(status: ToolItem["status"]) {
  return status === "coming-soon" ? "progress" : "live";
}

function renderAction(tool: ToolItem, className: string) {
  if (tool.downloadHref) {
    return (
      <a className={className} href={tool.downloadHref} download>
        {tool.actionLabel}
      </a>
    );
  }

  if (tool.href) {
    return (
      <a
        className={className}
        href={tool.href}
        target="_blank"
        rel="noreferrer"
      >
        {tool.actionLabel}
      </a>
    );
  }

  return (
    <span className={`${className} ${styles.actionDisabled}`}>
      {tool.actionLabel}
    </span>
  );
}

export default function HomeShell({ siteConfig, tools }: HomeShellProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});
  const navRef = useRef<HTMLElement | null>(null);
  const filterRefs = useRef<Record<FilterKey, HTMLButtonElement | null>>({
    all: null,
    tool: null,
    skill: null,
    "in-progress": null,
  });

  useEffect(() => {
    const shouldBoot =
      document.documentElement.classList.contains("boot-pending") ||
      Boolean(window.__ONEPIXELAI_BOOT__);

    if (!shouldBoot) {
      const frame = window.requestAnimationFrame(() => setIsReady(true));

      return () => window.cancelAnimationFrame(frame);
    }

    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("boot-pending");
      window.__ONEPIXELAI_BOOT__ = false;
      setIsReady(true);
    }, 1080);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty("--pointer-x", x.toFixed(3));
      document.documentElement.style.setProperty("--pointer-y", y.toFixed(3));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [isReady]);

  useEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current;
      const activeButton = filterRefs.current[activeFilter];

      if (!nav || !activeButton) {
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const x = buttonRect.left - navRect.left + 16;
      const width = Math.max(0, buttonRect.width - 32);

      setIndicatorStyle({
        width: `${width}px`,
        transform: `translateX(${x}px)`,
      });
    };

    const frame = window.requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeFilter, isReady]);

  const toolsByFilter = useMemo<Record<FilterKey, ToolItem[]>>(
    () => ({
      all: tools,
      tool: filterTools(tools, "tool"),
      skill: filterTools(tools, "skill"),
      "in-progress": filterTools(tools, "in-progress"),
    }),
    [tools],
  );

  const filteredTools = toolsByFilter[activeFilter];
  const filterCounts = useMemo<Record<FilterKey, number>>(
    () => ({
      all: toolsByFilter.all.length,
      tool: toolsByFilter.tool.length,
      skill: toolsByFilter.skill.length,
      "in-progress": toolsByFilter["in-progress"].length,
    }),
    [toolsByFilter],
  );

  const listDelayBase = animationCycle === 0 ? 0.28 : 0.08;

  const toggleOpenId = (toolId: string) => {
    setOpenId((current) => (current === toolId ? null : toolId));
  };

  const handleFilterChange = (nextFilter: FilterKey) => {
    if (nextFilter === activeFilter) {
      return;
    }

    setAnimationCycle((value) => value + 1);
    setOpenId(null);
    setActiveFilter(nextFilter);
  };

  return (
    <div className={styles.page}>
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={`${styles.pigment} ${styles.pigmentBlue}`} />
        <span className={`${styles.pigment} ${styles.pigmentRed}`} />
        <span className={`${styles.pigment} ${styles.pigmentGold}`} />
      </div>

      <div className={styles.bootScreen} data-boot-screen>
        <span className={styles.bootLabel}>Loading site...</span>
      </div>

      <aside className={styles.sideTicker}>
        <span className={styles.tickerText}>{siteConfig.tickerText}</span>
        <span className={styles.tickerDot} />
      </aside>

      <main
        className={`${styles.main} ${isReady ? styles.mainReady : ""}`}
        data-shell-content
      >
        <header className={styles.header}>
          <div className={styles.heroLine}>
            <h1 className={styles.heroTitle}>{siteConfig.heroTitle}</h1>
          </div>

          <div className={styles.headerMeta}>
            <p className={styles.siteIntro}>{siteConfig.intro}</p>
            <div className={styles.headerLinks}>
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <nav ref={navRef} className={styles.filterNav} aria-label="Tool filters">
          <span
            className={styles.filterIndicator}
            style={indicatorStyle}
            aria-hidden="true"
          />
          {filters.map((filter) => {
            return (
              <button
                key={filter.key}
                type="button"
                ref={(element) => {
                  filterRefs.current[filter.key] = element;
                }}
                className={`${styles.filterButton} ${
                  activeFilter === filter.key ? styles.filterButtonActive : ""
                }`}
                onClick={() => handleFilterChange(filter.key)}
              >
                {filter.label}
                {filter.key === "all" ? (
                  <span className={styles.countPill}>
                    {filterCounts[filter.key]}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>

        <section className={styles.worksView} aria-label="Tools index">
          <div className={styles.tableHead}>
            <span className={styles.thCell}>No.</span>
            <span className={styles.thCell}>Project</span>
            <span className={`${styles.thCell} ${styles.typeHead}`}>Type</span>
            <span className={`${styles.thCell} ${styles.actionsHead}`}>
              Actions
            </span>
          </div>

          <div
            key={`${activeFilter}-${animationCycle}`}
            className={styles.projectsList}
          >
            {filteredTools.map((tool, index) => {
              const isOpen = openId === tool.id;
              const tone = rowTone(tool.status);

              return (
                <div
                  key={tool.id}
                  className={styles.projectWrap}
                  style={
                    {
                      "--enter-delay": `${listDelayBase + index * 0.06}s`,
                    } as CSSProperties
                  }
                >
                  <div
                    className={styles.projectRow}
                    data-tone={tone}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggleOpenId(tool.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleOpenId(tool.id);
                      }
                    }}
                  >
                    <span className={styles.rowNum}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={styles.rowMain}>
                      <span className={styles.rowTitle}>{tool.name}</span>
                      <div className={styles.rowMeta}>
                        <span className={styles.rowDesc}>{tool.description}</span>
                        <span className={styles.rowStats}>{tool.availability}</span>
                      </div>
                    </div>

                    <div className={styles.rowTagCell}>
                      <span className={styles.rowTag}>{tool.typeLabel}</span>
                    </div>

                    <div
                      className={styles.rowActionsCell}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {renderAction(
                        tool,
                        `${styles.action} ${
                          tool.href || tool.downloadHref
                            ? styles.actionPrimary
                            : ""
                        }`,
                      )}
                    </div>
                  </div>

                  <div
                    className={`${styles.detailPanel} ${
                      isOpen ? styles.detailPanelOpen : ""
                    }`}
                  >
                    <div className={styles.detailGrid}>
                      <div className={styles.detailMain}>
                        <div className={styles.detailIntro}>
                          <span className={styles.detailFlag}>{tool.typeLabel}</span>
                          <h2 className={styles.detailTitle}>{tool.name}</h2>
                          <p className={styles.detailLead}>{tool.description}</p>
                        </div>

                        <div className={styles.detailBody}>
                          <h3>Overview</h3>
                          {tool.detailText.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}

                          <h3>Best For</h3>
                          <ul className={styles.detailList}>
                            {tool.useCases.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>

                          <h3>Next</h3>
                          <ul className={styles.detailList}>
                            {tool.roadmap.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <aside className={styles.detailSide}>
                        {tool.images?.length ? (
                          <div className={styles.detailGallery}>
                            {tool.images.map((image) => (
                              <figure
                                key={image.src}
                                className={styles.detailImageCard}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  width={1200}
                                  height={760}
                                  className={styles.detailImage}
                                />
                                <figcaption className={styles.detailImageLabel}>
                                  {image.label}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        ) : null}

                        <div className={styles.detailActions}>
                          {tool.downloadHref ? (
                            <a
                              className={`${styles.detailAction} ${styles.detailActionPrimary}`}
                              href={tool.downloadHref}
                              download
                            >
                              <span>Download file</span>
                              <span>.md</span>
                            </a>
                          ) : tool.href ? (
                            <a
                              className={`${styles.detailAction} ${styles.detailActionPrimary}`}
                              href={tool.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span>Visit tool</span>
                              <span>Open</span>
                            </a>
                          ) : (
                            <span
                              className={`${styles.detailAction} ${styles.detailActionMuted}`}
                            >
                              <span>Release status</span>
                              <span>Pending</span>
                            </span>
                          )}

                          <div className={styles.statusCard}>
                            <span className={styles.statusLabel}>Status</span>
                            <strong>
                              {tool.detailAvailability ?? tool.availability}
                            </strong>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInfo}>
            <span className={styles.footerLine}>{siteConfig.footerText}</span>
            <span className={styles.footerLine}>{siteConfig.footerNote}</span>
          </div>
          <span className={styles.footerCenter}>OnePixelAI tools index v1.0</span>
          <button
            type="button"
            className={styles.footerTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Top
          </button>
        </footer>
      </main>
    </div>
  );
}
