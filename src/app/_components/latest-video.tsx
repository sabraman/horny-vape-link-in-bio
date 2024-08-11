import Youtube from "@/components/ui/Youtube";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { NextRequest, NextResponse } from "next/server";

export async function LatestVideo() {
  const res = await fetch(
    "https://decapi.me/youtube/latest_video?id=UCYtkLtr1QD3IzDo39848ytA&format={id}|||{title}&no_shorts=1&no_livestream=1"
  );

  const data = await res.text();
  const [LatestVideoId, LatestVideoTitle] = data.split("|||");

  return LatestVideoTitle ? (
    <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-4">
      <AspectRatio ratio={16 / 9}>
        <Youtube id={LatestVideoId} title={LatestVideoTitle} />
      </AspectRatio>
      <p>{LatestVideoTitle}</p>
    </div>
  ) : null;
}
