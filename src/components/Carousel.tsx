import React, { useState, useEffect, useRef } from 'react';
import '../styles/Carousel.css';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const autoplayMs = 5000;

  // 轮播图数据
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: '可靠、省心的智能语音方案专家',
      subtitle: '专注打磨，迭代升级，品质可靠',
      description: '专注于智能语音交互技术的研发与应用，为您提供全方位的语音解决方案',
      image: '/images/lunbo3.jpeg',
      buttonText: '了解更多',
      buttonLink: '/solutions'
    },
    {
      id: 2,
      title: '引领AI语音交互新时代',
      subtitle: '自主研发核心算法，赋能智能设备',
      description: '从芯片到算法，从软件到硬件，一站式语音交互解决方案提供商',
      image: '/images/lunbo2.jpeg',
      buttonText: '探索产品',
      buttonLink: '/products'
    },
    {
      id: 3,
      title: '让万物听懂你的声音',
      subtitle: '多场景适配，多语言支持',
      description: '中文语音识别、外文语音识别、特定声音识别，满足不同场景需求',
      image: '/images/lunbo1.jpeg',
      buttonText: '应用案例',
      buttonLink: '/industry-applications'
    }
  ];

  // 初始化轮播
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // 自动播放轮播图
  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoplayMs);
  };

  // 下一张轮播图
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowText(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
        setShowText(true);
        setIsAnimating(false);
      }, 500);
    }
  };

  // 上一张轮播图
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowText(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
        setShowText(true);
        setIsAnimating(false);
      }, 500);
    }
  };

  // 跳转到指定轮播图
  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setShowText(false);

      setTimeout(() => {
        setCurrentSlide(index);
        setShowText(true);
        setIsAnimating(false);
      }, 500);
    }
  };

  // 鼠标悬停时暂停自动播放
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // 鼠标离开时恢复自动播放
  const handleMouseLeave = () => {
    startAutoPlay();
  };

  // touch swipe controls
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.touches[0].clientX - touchStartX;
    setTouchDeltaX(dx);
  };

  const handleTouchEnd = () => {
    const threshold = 60;
    if (touchDeltaX > threshold) {
      prevSlide();
    } else if (touchDeltaX < -threshold) {
      nextSlide();
    } else {
      startAutoPlay();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <div 
      className="carousel"
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        // control progress duration via CSS var
        // @ts-ignore
        '--carousel-duration': `${autoplayMs}ms`
      } as React.CSSProperties}
    >
      {/* 背景分层与Ken Burns */}
      <div className="carousel-slides">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : index === (currentSlide - 1 + carouselItems.length) % carouselItems.length ? 'prev' : index === (currentSlide + 1) % carouselItems.length ? 'next' : ''}`}
          >
            <div 
              className="kenburns"
              style={{ backgroundImage: `url(${item.image})` }}
              aria-hidden={index !== currentSlide}
            />
          </div>
        ))}
      </div>

      {/* 前景内容与文字分层 */}
      <div className="carousel-inner">
        <div className={`carousel-item ${isAnimating ? 'animating' : ''}`}>
          <div className="carousel-content">
            <div className={`carousel-text ${showText ? 'fade-in' : ''}`}>
              <h2 className="carousel-title" aria-live="polite">{currentItem.title}</h2>
              <h3 className="carousel-subtitle">{currentItem.subtitle}</h3>
              <p className="carousel-description">{currentItem.description}</p>
              <a 
                href={currentItem.buttonLink} 
                className="carousel-button btn btn-primary"
              >
                {currentItem.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 轮播图控制按钮 */}
      <button 
        className="carousel-control carousel-control-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="carousel-control-icon">‹</span>
      </button>
      <button 
        className="carousel-control carousel-control-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="carousel-control-icon">›</span>
      </button>

      {/* 轮播图指示器 + 进度条 */}
      <div className="carousel-indicators" role="tablist" aria-label="Slides">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`第${index + 1}张`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;