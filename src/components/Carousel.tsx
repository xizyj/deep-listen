import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
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

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const autoplayMs = 5000;

  // 轮播：使用检索侧真实语言（离线语音模块 / 场景方案），避免「端侧 AI」等内部品类词
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: '离线语音识别与语音方案商',
      subtitle: '免联网语音模块 · 自定义唤醒词 · 约 2 周出样',
      description: '为家电、厨电、照明整机厂提供离线语音模块与定制开发，断网可用、数据不上云',
      image: '/images/lunbo3.jpeg',
      buttonText: '咨询方案',
      buttonLink: '/contact'
    },
    {
      id: 2,
      title: '离线语音模块，快速挂载主控',
      subtitle: 'UART 等常见接口 · 低功耗 · 可量产',
      description: '串口语音模块与嵌入式语音模组选型，减少重画板成本，从打样到量产一站交付',
      image: '/images/lunbo2.jpeg',
      buttonText: '硬件方案',
      buttonLink: '/solutions/intelligent-hardware-solution'
    },
    {
      id: 3,
      title: '浴霸 / 油烟机 / 风扇语音方案',
      subtitle: '强噪声场景落地 · 开孔与指令集可参考',
      description: '按场景交付离线语音控制：噪声特征、结构建议与典型指令，便于硬件与产品评估',
      image: '/images/lunbo1.jpeg',
      buttonText: '场景方案',
      buttonLink: '/scenarios'
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

  const carouselStyle = {
    '--carousel-duration': `${autoplayMs}ms`,
  } as CSSProperties;

  return (
    <div 
      className="carousel"
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={carouselStyle}
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
              <h1 className="carousel-title" aria-live="polite">{currentItem.title}</h1>
              <h2 className="carousel-subtitle">{currentItem.subtitle}</h2>
              <p className="carousel-description">{currentItem.description}</p>
              <Link
                to={currentItem.buttonLink}
                className="carousel-button btn btn-primary"
              >
                {currentItem.buttonText}
              </Link>
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