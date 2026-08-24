import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ReelsFeed } from "@/components/ReelsFeed";

export const Route = createFileRoute("/reels")({
  head: () => ({
    meta: [{ title: "India Shorts — Virasat" }, { name: "description", content: "Short, vertical travel videos across India." }],
  }),
  component: function ReelsPage() {
    return (
      <Layout>
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="font-display text-4xl font-bold mb-6">India Shorts</h1>
          <p className="text-muted-foreground mb-6">Discover short vertical videos highlighting India's heritage, culture and travel experiences.</p>
          <ReelsFeed />
        </div>
      </Layout>
    );
  },
});
