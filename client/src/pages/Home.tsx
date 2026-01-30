import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[80%] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-gradient-to-t from-secondary/5 to-transparent rounded-full blur-3xl opacity-40" />
        
        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-80 md:opacity-100"
        >
          <img 
            src="/images/hero-lily-bg.png" 
            alt="Pink Lily Background" 
            className="w-full h-full object-cover object-right-top mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)' }}
          />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-12 bg-primary/60 block" />
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-6 text-balance">
            Cultivating <br />
            <span className="text-primary italic">Digital</span> Experiences
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Combinando engenharia robusta com design orgânico para criar interfaces que florescem na web.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 h-12 text-base group">
                Explorar Jardim
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 border-primary/20 text-foreground">
                Sobre Mim
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Cards (Decorative) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden lg:block absolute bottom-12 right-12 glass-card p-6 rounded-2xl max-w-xs animate-float"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Palette size={20} />
          </div>
          <div>
            <h4 className="font-medium text-sm">Design System</h4>
            <p className="text-xs text-muted-foreground">Atomic & Organic</p>
          </div>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
