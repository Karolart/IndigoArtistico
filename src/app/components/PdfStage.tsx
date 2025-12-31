import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

interface PdfStageProps {
  file?: string;
}

export function PdfStage({ file }: PdfStageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!file || !canvasRef.current) return;

    let cancelled = false;
    setError(false);

    pdfjs
      .getDocument(file)
      .promise.then((pdf: PDFDocumentProxy) => pdf.getPage(page))
      .then((pdfPage: PDFPageProxy) => {
        if (cancelled || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const viewport = pdfPage.getViewport({ scale: 1.6 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        pdfPage.render({
          canvasContext: ctx,
          viewport,
          canvas,
        });
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [file, page]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      {/* CAMERINO LIGHTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] animate-pulse" />
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.9)] animate-pulse" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.9)] animate-pulse" />
      </div>

      {/* BACKSTAGE */}
      {(!file || error) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60 z-10">
          <p className="tracking-[0.4em] mb-2">BACKSTAGE</p>
          <p className="text-sm italic">The lights are warming up</p>
        </div>
      )}

      {/* PDF */}
      {file && !error && (
        <>
          <canvas
            ref={canvasRef}
            className="relative max-w-full max-h-full rounded-md shadow-[0_0_40px_rgba(236,72,153,0.15)] z-10"
          />

          {/* PAGE NAV */}
          <div className="absolute bottom-6 z-20 flex gap-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 text-xs tracking-widest border border-white/20 text-white hover:bg-white/10"
            >
              PREV
            </button>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 text-xs tracking-widest border border-white/20 text-white hover:bg-white/10"
            >
              NEXT
            </button>
          </div>
        </>
      )}
    </div>
  );
}
