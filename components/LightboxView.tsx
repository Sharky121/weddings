"use client";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import type { Slide } from "./ImageLightbox";

type LightboxViewProps = {
  open: boolean;
  close: () => void;
  index: number;
  slides: Slide[];
  onView: (index: number) => void;
};

/** Сам лайтбокс — вынесен отдельно, чтобы ImageLightbox подгружал его лениво (next/dynamic). */
export default function LightboxView({ open, close, index, slides, onView }: LightboxViewProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      on={{ view: ({ index: i }) => onView(i) }}
      plugins={[Thumbnails]}
      thumbnails={{ position: "bottom", width: 96, height: 64, gap: 8, borderRadius: 4 }}
    />
  );
}
