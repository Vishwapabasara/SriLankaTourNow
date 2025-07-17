// SriLankaVideos.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlayCircle } from "lucide-react";

const API_KEY = 'AIzaSyAVdk6G90AvCngeVCJmIHfBa4o7sa1bPfc';
const MAX_RESULTS = 3;
const SEARCH_QUERY = "Sri Lanka travel vlog";

export default function SriLankaVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: SEARCH_QUERY,
          maxResults: MAX_RESULTS,
          type: "video",
          key: API_KEY,
        },
      })
      .then((response) => {
        const valid = response.data.items.filter(
          (item) =>
            item.id?.videoId &&
            item.snippet?.title &&
            item.snippet?.thumbnails?.medium
        );
        setVideos(valid);
      })
      .catch((error) => {
        console.error("YouTube API Error:", error);
      });
  }, []);

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          🇱🇰 Sri Lanka Travel Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
            >
              <div className="relative">
                <iframe
                  className="w-full h-44"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <PlayCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="px-4 py-2">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
