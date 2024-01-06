"use client";

import React from "react";
import Link from "next/link";
import Color from "color";
import { ArrowRightIcon, CopyIcon, HeartIcon, ScrollArea, useToast } from "@palettify/ui";
import { cn } from "@palettify/utils";
import { ThemeCardMenu } from "./theme-card-menu";

interface ThemeCardProps {
  displayVote?: boolean;
  palette: {
    background?: string;
    foreground?: string;
    primary?: string;
    secondary?: string;
    card?: string;
  };
}

export const ThemeCard = (props: ThemeCardProps) => {
  const { displayVote = true, palette } = props;

  const {
    background = "#fff",
    foreground = "#000",
    primary = "#4942E4",
    secondary = "#fcba03",
    card = "#3d3d54",
  } = palette;

  const [liked, setLike] = React.useState<boolean>(false);
  const { toast } = useToast();

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast({ title: "Color copied successfully", variant: "default" });
  };

  return (
    <div className="group/card bg-card/20 hover:bg-card/70 rounded-lg p-2 pt-1 duration-150 hover:shadow-md">
      <div className="flex items-center justify-between space-x-1 px-1 py-0.5 opacity-100 group-hover/card:opacity-100">
        <Link
          href={"/playground?theme="}
          className="my-1 flex flex-1 items-center space-x-1 text-sm font-medium opacity-0 duration-150 group-hover/card:opacity-70 group-hover/card:hover:opacity-100"
        >
          <span>playground</span>
          <ArrowRightIcon size={16} />
        </Link>
        <a
          onClick={() => {
            setLike((prev) => !prev);
          }}
          className="flex cursor-pointer items-center space-x-2 opacity-70 duration-150 hover:opacity-100"
        >
          <span
            className={cn("mb-0.5 inline", {
              "text-red-600": liked,
            })}
          >
            {liked ? 1 : 0}
          </span>
          <HeartIcon
            size={15}
            className={cn({
              "fill-red-600 text-red-600": liked,
            })}
          />
        </a>
        <ThemeCardMenu />
      </div>
      <ScrollArea
        className="h-[300px] rounded border shadow"
        // type="always"
        scrollHideDelay={0}
        style={{ background: background }}
      >
        {/* Navbar */}
        <div className="flex justify-between px-4 py-2">
          <div className="w-6">
            <div
              className="h-2 w-4 rounded bg-black"
              style={{ background: foreground }}
            />
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-2 w-4 rounded-full" style={{ background: foreground }} />
            <div className="h-2 w-4 rounded-full" style={{ background: foreground }} />
            <div className="h-2 w-4 rounded-full" style={{ background: foreground }} />
          </div>
          <div className="h-2 w-6 rounded" style={{ background: primary }} />
        </div>
        {/* main */}
        <div className="mx-auto px-4 pb-6">
          {/* Hero */}
          <div className="flex flex-col items-center pt-8">
            <div className="h-2 w-[120px] rounded" style={{ background: foreground }} />
            <div
              className="mt-1 h-2 w-[60px] rounded"
              style={{ background: foreground }}
            />
            {/* CTA */}
            <div className="mt-4 flex justify-center space-x-2">
              <div className="h-3 w-8 rounded" style={{ background: primary }} />
              <div
                className="h-3 w-8 rounded border"
                style={{ borderColor: foreground }}
              />
            </div>
          </div>
          {/* trusted by */}
          <div className="mt-6 flex flex-col items-center">
            <div className="h-1 w-[40px] rounded" style={{ background: foreground }} />
            <div className="mt-1 flex justify-center space-x-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-4 rounded-full"
                    style={{ background: foreground }}
                  />
                ))}
            </div>
          </div>
          {/* features */}
          <div className="mt-4 flex flex-col items-center">
            <div
              className="mt-1 h-2 w-[40px] rounded"
              style={{ background: foreground }}
            />
            <div className="mt-2 grid w-full grid-cols-3 gap-2">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="h-5 rounded" style={{ background: card }} />
                ))}
            </div>
          </div>
          {/* testimonials */}
          <div className="mt-4 flex flex-col items-center">
            <div
              className="mt-1 h-2 w-[70px] rounded"
              style={{ background: foreground }}
            />
            <div className="mt-2 grid w-full grid-cols-4 gap-2">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="h-8 rounded" style={{ background: card }} />
                ))}
            </div>
          </div>
          {/* CTA */}
          <div className="mt-8 flex flex-col items-center">
            <div
              className="h-3 w-[50px] rounded-full"
              style={{ background: foreground }}
            />
            <div
              className="mt-1 h-2 w-[70px] rounded"
              style={{ background: foreground }}
            />
            <div className="mt-2 h-3 w-8 rounded" style={{ background: primary }} />
          </div>
        </div>
        {/* footer */}
        <div className="flex justify-between border-t px-2 py-2">
          <div className="h-2 w-[70px] rounded" style={{ background: foreground }} />
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-[3px]"
                  style={{ background: foreground }}
                />
              ))}
          </div>
        </div>
      </ScrollArea>
      <div className="mt-2 flex w-full space-x-2">
        {[
          { label: "Background", value: background },
          // { label: "Foreground", value: foreground },
          { label: "Primary", value: primary },
          { label: "Secondary", value: secondary },
          { label: "Card", value: card },
        ].map((item, index) => {
          const isHex = item.value.startsWith("#");
          const isDark = isHex ? Color(item.value).isDark() : false;

          return (
            <div
              key={index}
              className={cn(
                "group/palette h-12 w-[1px] grow cursor-pointer overflow-hidden rounded px-2 py-1 shadow duration-300 hover:w-[45%]"
              )}
              onClick={() => {
                handleCopy(item.value);
              }}
              style={{ background: item.value }}
            >
              <div
                className={cn(
                  "hidden h-full items-center justify-between text-xs text-black group-hover/palette:flex",
                  {
                    "text-white": isDark,
                  }
                )}
              >
                <div>
                  <p className="font-bold">{item.label}</p>
                  <p className="font-medium">{isHex ? item.value : "gradient"}</p>
                </div>
                <CopyIcon size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
