import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, X, BookOpen } from 'lucide-react';
import { blogCategories, blogData } from '../data/blogData';
import SectionBadge from '../components/ui/SectionBadge';
import GlassCard from '../components/ui/GlassCard';

const renderFormattedContent = (content) => {
  if (!content) return null;
  const blocks = content.split('\n\n');

  return blocks.map((block, idx) => {
    // Heading 3
    if (block.startsWith('### ')) {
      return (
        <h3 key={idx} className="font-sora font-bold text-xl text-white mt-6 mb-3 tracking-tight">
          {block.replace('### ', '')}
        </h3>
      );
    }

    // List items or subheadings
    if (block.includes('\n- ') || block.startsWith('- ')) {
      const lines = block.split('\n');
      return (
        <div key={idx} className="my-4 space-y-2">
          {lines.map((line, lIdx) => {
            if (line.startsWith('- ')) {
              const cleanLine = line.replace('- ', '');
              const parts = cleanLine.split('**');
              if (parts.length >= 3) {
                return (
                  <div key={lIdx} className="flex items-start gap-2 text-ecell-gray/90 leading-relaxed ml-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-semibold">{parts[1]}</strong>
                      {parts.slice(2).join('')}
                    </p>
                  </div>
                );
              }
              return (
                <div key={lIdx} className="flex items-start gap-2 text-ecell-gray/90 leading-relaxed ml-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <p>{cleanLine}</p>
                </div>
              );
            }
            return <p key={lIdx} className="text-white font-semibold mb-1">{line}</p>;
          })}
        </div>
      );
    }

    // Paragraphs with inline bold text
    const paragraphLines = block.split('\n');
    return (
      <div key={idx} className="space-y-2 mb-4">
        {paragraphLines.map((line, lIdx) => {
          if (line.startsWith('**') && line.endsWith('**')) {
            return (
              <h4 key={lIdx} className="font-sora font-semibold text-base text-blue-300 mt-4 mb-1">
                {line.replace(/\*\*/g, '')}
              </h4>
            );
          }
          return <p key={lIdx} className="text-ecell-gray/90 leading-relaxed">{line}</p>;
        })}
      </div>
    );
  });
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState(null);

  // Filter posts
  const filteredPosts = blogData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-transparent">
      {/* Background orbs */}
      <div className="orb orb-blue absolute top-[-10%] left-[-10%] w-[500px] h-[500px] opacity-25 pointer-events-none" />
      <div className="orb orb-cyan absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionBadge className="mb-4">Resources & Insights</SectionBadge>
          <h1 className="section-heading text-4xl md:text-6xl mb-6">
            The Startup Blog
          </h1>
          <p className="text-ecell-gray/70 max-w-xl mx-auto text-base">
            Your hub for product strategies, tech insights, and student founder stories at JCER.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ecell-gray/50" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 hover:border-blue-500/30 focus:border-blue-500 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder-ecell-gray/50 outline-none transition-all duration-300"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-inter font-medium tracking-wide whitespace-nowrap transition-all duration-300 border
                  ${
                    selectedCategory === category
                      ? 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/[0.02] border-white/10 text-ecell-gray/80 hover:text-white hover:border-white/20'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-8 flex flex-col justify-between h-full group hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden">
                  {/* Decorative faint glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-[10px] font-sora font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/25">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-ecell-gray/50">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sora font-bold text-xl text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-ecell-gray/85 font-inter text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer / Meta Info */}
                  <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-white/90">{post.author}</span>
                    </div>

                    <button
                      onClick={() => setActivePost(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-sora font-bold text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/[0.01] border border-white/[0.06] rounded-2xl">
            <BookOpen className="w-10 h-10 text-ecell-gray/40 mx-auto mb-4" />
            <h3 className="text-lg font-sora font-medium text-white mb-1">No articles found</h3>
            <p className="text-ecell-gray/50 text-sm">Try broadening your search term or filtering a different category.</p>
          </div>
        )}
      </div>

      {/* Immersive Expanded Post Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-neutral-950 border border-white/10 rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
            >
              {/* Top Banner Area */}
              <div className="p-6 md:p-8 border-b border-white/[0.08] sticky top-0 bg-neutral-950/90 backdrop-blur-xl z-20 flex items-start justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/25">
                      {activePost.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ecell-gray/60">
                      <Calendar className="w-3.5 h-3.5" />
                      {activePost.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ecell-gray/60">
                      <Clock className="w-3.5 h-3.5" />
                      {activePost.readTime}
                    </span>
                  </div>
                  <h2 className="font-sora font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-tight">
                    {activePost.title}
                  </h2>
                </div>

                <button
                  onClick={() => setActivePost(null)}
                  className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto font-inter text-sm md:text-base text-ecell-gray/90 leading-relaxed space-y-4">
                {/* Author Info */}
                <div className="flex items-center gap-3 py-3 border-b border-white/[0.06] mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-ecell-gray/50">Written by</p>
                    <p className="text-sm font-semibold text-white">{activePost.author}</p>
                  </div>
                </div>

                {/* Render formatted blocks */}
                <div>
                  {renderFormattedContent(activePost.content)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
