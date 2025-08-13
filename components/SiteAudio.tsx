'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function SiteAudio({
  src,
  title = "Unspent Capital — Intro",
  poster,
  className = "",
}: {
  src: string;
  title?: string;
  poster?: string;
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [metaLoaded, setMetaLoaded] = useState(false);
  const durationPollRef = useRef<number | null>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    const pickDuration = () => {
      // Prefer true duration; fall back to seekable range (helps some browsers)
      const d1 = a.duration;
      let d = Number.isFinite(d1) && d1 > 0 ? d1 : 0;
      if ((!d || !Number.isFinite(d)) && a.seekable && a.seekable.length) {
        try { d = a.seekable.end(a.seekable.length - 1); } catch {}
      }
      if (d && Number.isFinite(d)) {
        setDuration(d);
        setMetaLoaded(true);
        return true;
      }
      return false;
    };

    const onLoaded = () => { pickDuration(); };
    const onTime = () => {
      setTime(a.currentTime || 0);
      if (!metaLoaded) pickDuration();
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("canplay", onLoaded);
    a.addEventListener("durationchange", onLoaded);
    a.addEventListener("progress", onLoaded);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("ended", onEnded);

    // Apply client-only properties
    a.playbackRate = rate;
    a.volume = volume;

    // As a fallback, poll briefly until we get a duration
    if (!metaLoaded && durationPollRef.current == null) {
      durationPollRef.current = window.setInterval(() => {
        if (pickDuration()) {
          if (durationPollRef.current) {
            clearInterval(durationPollRef.current);
            durationPollRef.current = null;
          }
        }
      }, 300);
    }

    return () => {
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("canplay", onLoaded);
      a.removeEventListener("durationchange", onLoaded);
      a.removeEventListener("progress", onLoaded);
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("ended", onEnded);
      if (durationPollRef.current) {
        clearInterval(durationPollRef.current);
        durationPollRef.current = null;
      }
    };
  }, [rate, volume, metaLoaded]);

  const fmt = (s: number) => {
    if (!isFinite(s) || s < 0) s = 0;
    const hh = Math.floor(s / 3600);
    const mm = Math.floor((s % 3600) / 60);
    const ss = Math.floor(s % 60);
    return [hh, mm, ss]
      .filter((v, i) => v !== 0 || i > 0)
      .map((n) => String(n).padStart(2, "0"))
      .join(":");
  };

  const progress = useMemo(
    () => (duration ? (time / duration) * 100 : 0),
    [time, duration]
  );

  const seek = (newTime: number) => {
    const a = audioRef.current;
    if (!a) return;
    const safe = duration && isFinite(duration)
      ? Math.min(Math.max(newTime, 0), Math.max(0, duration - 0.1))
      : 0;
    a.currentTime = safe;
    setTime(safe);
  };

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
      } catch {}
    } else {
      a.pause();
    }
  };

  const changeRate = (r: number) => {
    setRate(r);
    if (audioRef.current) audioRef.current.playbackRate = r;
  };

  const changeVolume = (v: number) => {
    const vv = Math.min(1, Math.max(0, v));
    setVolume(vv);
    if (audioRef.current) audioRef.current.volume = vv;
  };

  return (
    <div
      className={`w-full max-w-3xl rounded-2xl border-unspent-bg-primary/60 bg-unspent-bg-secondary shadow-lg p-4 sm:p-5 ${className}`}
      role="region"
      aria-label={`${title} audio player`}
    >
      <div className="flex items-start gap-4">
        {poster && (
          <img
            src={poster}
            alt="Cover art"
            className="hidden sm:block w-20 h-20 rounded-xl object-cover"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-unspent-text-primary truncate">
              {title}
            </h3>
            <span className="text-xs sm:text-sm text-unspent-text-secondary tabular-nums">
              {metaLoaded ? fmt(duration) : "Loading..."}
            </span>
          </div>
          <p className="text-sm text-unspent-text-secondary mt-0.5">Unspent • Capital</p>

          <div className="mt-3">
            <div className="relative w-full">
              <div className="h-2 w-full bg-unspent-bg-primary/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-unspent-accent-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <input
                type="range"
                aria-label="Seek"
                className="mt-2 w-full h-2 appearance-none bg-transparent focus:outline-none"
                min={0}
                max={duration || 0}
                step={0.1}
                value={time}
                onChange={(e) => seek(parseFloat(e.target.value))}
                onInput={(e) => seek(parseFloat((e.target as HTMLInputElement).value))}
              />
            </div>
            <div className="flex justify-between text-xs text-unspent-text-secondary mt-2 tabular-nums">
              <span>{fmt(time)}</span>
              <span>-{fmt(Math.max(0, (duration || 0) - time))}</span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => seek(time - 15)}
              className="px-3 py-2 rounded-xl bg-unspent-bg-primary hover:bg-unspent-bg-primary/70 transition shadow"
              aria-label="Rewind 15 seconds"
            >
              ⏪ 15s
            </button>

            <button
              onClick={toggle}
              className="px-4 py-2 rounded-xl bg-unspent-accent-primary text-unspent-text-on-accent font-medium shadow hover:bg-unspent-accent-primary-hover transition"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            <button
              onClick={() => seek(time + 30)}
              className="px-3 py-2 rounded-xl bg-unspent-bg-primary hover:bg-unspent-bg-primary/70 transition shadow"
              aria-label="Forward 30 seconds"
            >
              30s ⏩
            </button>

            <div className="ml-auto flex items-center gap-2">
              <label className="text-xs text-unspent-text-secondary" htmlFor="rate">
                Speed
              </label>
              <select
                id="rate"
                className="px-2 py-1 rounded-lg bg-unspent-bg-primary text-sm"
                value={rate}
                onChange={(e) => changeRate(parseFloat(e.target.value))}
              >
                {[0.75, 1, 1.25, 1.5, 1.75, 2].map((r) => (
                  <option key={r} value={r}>
                    {r}×
                  </option>
                ))}
              </select>

              <label className="text-xs text-unspent-text-secondary ml-3" htmlFor="vol">
                Vol
              </label>
              <input
                id="vol"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        aria-label={title}
        controls={false}
        controlsList="nodownload noplaybackrate"
      />

      <div className="mt-3 text-right">
        <a
          href={src}
          download
          className="text-xs underline text-unspent-text-secondary hover:text-unspent-text-primary"
        >
          Download
        </a>
      </div>
    </div>
  );
}
