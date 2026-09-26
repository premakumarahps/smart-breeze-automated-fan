import React, { useState } from 'react';
import { Presentation, BookOpen, ChevronLeft, ChevronRight, Download, Maximize2, X, Bookmark, FileText, CheckCircle2 } from 'lucide-react';
import { PRESENTATION_SLIDES_DATA } from '../core/fanData';
import { REPORT_CHAPTERS_FULL } from '../core/reportChapters';
import { MathView } from './MathView';

export const DocumentViewer: React.FC = () => {
  const [docMode, setDocMode] = useState<'slides' | 'report'>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch1');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const activeChapter =
    REPORT_CHAPTERS_FULL.find((c) => c.id === selectedChapterId) || REPORT_CHAPTERS_FULL[0];

  const currentSlide = PRESENTATION_SLIDES_DATA[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % PRESENTATION_SLIDES_DATA.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + PRESENTATION_SLIDES_DATA.length) % PRESENTATION_SLIDES_DATA.length);
  };

  return (
    <section id="docs" className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header & Mode Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-cyan text-xs font-semibold mb-1">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Official Academic Deliverables</span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Presentation Slides &amp; Project Report
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Review the complete 12-slide defense deck with original graphics and explore the 8-chapter thesis.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex p-1 rounded-2xl glass-panel border border-slate-800">
              <button
                onClick={() => setDocMode('slides')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  docMode === 'slides'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Presentation className="w-3.5 h-3.5" />
                <span>Presentation Slides</span>
              </button>

              <button
                onClick={() => setDocMode('report')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  docMode === 'report'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Project Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. Presentation Slides Carousel Mode */}
        {docMode === 'slides' ? (
          <div className="glass-panel rounded-3xl p-6 border border-teal-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="badge-teal text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                  Slide {currentSlide.slideNo} of {PRESENTATION_SLIDES_DATA.length}
                </span>
                <span className="text-sm font-bold text-white hidden sm:inline">
                  {currentSlide.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/docs/Smart_Breeze_Presentation_Slides.pdf"
                  download="Smart_Breeze_Presentation_Slides.pdf"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold glass-panel text-teal-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download Deck PDF</span>
                </a>

                <button
                  onClick={() => setIsFullScreen(true)}
                  className="p-1.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
                  title="Full Screen View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide Image Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-2 shadow-2xl">
              <img
                src={currentSlide.image}
                alt={`Slide ${currentSlide.slideNo}: ${currentSlide.title}`}
                className="w-full max-h-[580px] object-contain rounded-xl"
              />

              {/* Prev / Next Carousel Controls */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel border border-slate-700 flex items-center justify-center text-white hover:bg-teal-500/30 hover:scale-110 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel border border-slate-700 flex items-center justify-center text-white hover:bg-teal-500/30 hover:scale-110 transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Navigation Thumbnails */}
            <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
              {PRESENTATION_SLIDES_DATA.map((slide, i) => (
                <button
                  key={slide.slideNo}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-16 h-10 rounded-lg overflow-hidden border shrink-0 transition-all ${
                    currentSlideIndex === i
                      ? 'border-teal-400 ring-2 ring-teal-400/50 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* 2. Project Report Chapters Mode */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Chapters Sidebar */}
            <div className="lg:col-span-4 glass-panel rounded-3xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>Report Chapters (1.0 - 8.0)</span>
                </span>

                <a
                  href="/docs/Smart_Breeze_Project_Report.pdf"
                  download="Smart_Breeze_Project_Report.pdf"
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold badge-teal flex items-center gap-1 hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>Full PDF</span>
                </a>
              </div>

              <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1">
                {REPORT_CHAPTERS_FULL.map((chapter) => {
                  const isSelected = chapter.id === selectedChapterId;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setSelectedChapterId(chapter.id)}
                      className={`w-full text-left p-3 rounded-2xl text-xs transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-teal-500/20 border border-teal-500/60 text-white font-bold'
                          : 'bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 border border-slate-800/80'
                      }`}
                    >
                      <span className="font-mono text-teal-400 shrink-0 font-bold">{chapter.number}</span>
                      <span className="line-clamp-2">{chapter.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chapter Content Reader */}
            <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 border border-teal-500/30 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="badge-teal text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                  Chapter {activeChapter.number}
                </span>
                <h3 className="text-2xl font-black text-white mt-2">
                  {activeChapter.title}
                </h3>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeChapter.sections.map((sec, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-base font-bold text-teal-300">
                      {sec.heading}
                    </h4>

                    {sec.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}

                    {/* Mathematical Equation Card */}
                    {sec.equations && sec.equations.map((eq, eqIdx) => (
                      <div key={eqIdx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 my-3 text-xs space-y-1">
                        <div className="flex justify-between text-[11px] text-teal-400 font-bold">
                          <span>Mathematical Model:</span>
                          <span className="font-mono">{eq.label}</span>
                        </div>
                        <MathView math={eq.latex} block={true} />
                        <p className="text-[11px] text-slate-400 mt-1">{eq.explanation}</p>
                      </div>
                    ))}

                    {/* Highlight Callout */}
                    {sec.callout && (
                      <div className="p-3.5 rounded-2xl bg-teal-950/40 border border-teal-500/40 text-teal-200 text-xs font-medium">
                        💡 {sec.callout}
                      </div>
                    )}

                    {/* Section Diagram / Image */}
                    {sec.image && (
                      <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-2 my-4">
                        <img src={sec.image} alt={sec.caption || 'Report Figure'} className="w-full max-h-96 object-contain rounded-xl" />
                        {sec.caption && (
                          <p className="text-center text-[11px] text-slate-400 mt-2">{sec.caption}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Slide Modal */}
        {isFullScreen && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between text-white pb-4">
              <span className="text-sm font-bold">
                Slide {currentSlide.slideNo}: {currentSlide.title}
              </span>
              <button
                onClick={() => setIsFullScreen(false)}
                className="p-2 rounded-full glass-panel hover:bg-slate-800 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handlePrevSlide}
                className="px-6 py-2 rounded-xl glass-panel text-white hover:bg-slate-800"
              >
                Previous Slide
              </button>
              <button
                onClick={handleNextSlide}
                className="btn-primary px-6 py-2"
              >
                Next Slide
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
