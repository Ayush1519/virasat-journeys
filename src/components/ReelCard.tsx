import { Link } from "@tanstack/react-router";
import { Reel } from "@/data/reels";
import { Heart, MessageCircle, Share2, Bookmark, MapPin } from "lucide-react";

export function ReelCard({ r }: { r: Reel }) {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-card bg-black text-ivory">
      <div className="relative" style={{ paddingTop: '177%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${r.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
          title={r.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-display font-bold text-lg">{r.title}</div>
            <div className="text-sm text-muted-foreground flex items-center gap-2"><MapPin className="w-4 h-4" /> {r.city}, {r.state}</div>
          </div>
          <div className="text-sm text-muted-foreground">{r.category}</div>
        </div>

        <p className="text-sm text-foreground/90">{r.description}</p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3 text-sm">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Heart className="w-4 h-4" /> {r.likes ?? 0}
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <MessageCircle className="w-4 h-4" /> {r.comments ?? 0}
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="glass rounded-lg px-3 py-2 text-sm flex items-center gap-2">
              <Bookmark className="w-4 h-4" /> Save
            </button>
            <Link to="/site/$siteId" params={{ siteId: r.destinationId ?? r.siteId ?? '' }} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-primary text-primary-foreground text-sm">
              Explore Place
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
