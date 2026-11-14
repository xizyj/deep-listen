import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import '../styles/SideTools.css'

const PHONE = '18626895139'
const EMAIL = 'support@deeplisten.cn'

type PopoverKey = 'wechat' | 'mail' | 'phone'

const SideTools = () => {
  const [openKey, setOpenKey] = useState<PopoverKey | null>(null)

  useEffect(() => {
    const close = () => setOpenKey(null)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element) || !target.closest('.side-tools-bar')) {
        close()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  const toggle = (key: PopoverKey) => {
    setOpenKey((current) => (current === key ? null : key))
  }

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <aside className="side-tools-bar" aria-label="快捷联系">
      <ul className="side-tools-list">
        <li className="side-tool-item side-tool-brand">
          <Link to={ROUTES.home} title="深聆科技首页">
            <span className="side-brand-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h2" />
                <path d="M7 8v8" />
                <path d="M11 5v14" />
                <path d="M15 8v8" />
                <path d="M19 10v4" />
              </svg>
            </span>
            <span className="side-tool-txt">深聆</span>
          </Link>
        </li>

        <li className={`side-tool-item side-tool-wechat${openKey === 'wechat' ? ' is-open' : ''}`}>
          <button
            type="button"
            aria-expanded={openKey === 'wechat'}
            aria-haspopup="true"
            onClick={() => toggle('wechat')}
          >
            <span className="side-tool-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h3v3M17 17h4M14 21h3M21 14v3" />
              </svg>
            </span>
            <span className="side-tool-txt">公众号</span>
          </button>
          <div className="side-popover-box popover-wechat">
            <div className="popover-header">
              <div className="popover-title">关注公众号</div>
              <div className="popover-sub">产品动态与技术内容</div>
            </div>
            <div className="popover-qr">
              <img src="/images/qrcode.jpg" alt="深聆科技微信公众号二维码" width="140" height="140" />
            </div>
            <div className="popover-hint">微信扫一扫关注</div>
          </div>
        </li>

        <li className={`side-tool-item side-tool-mail${openKey === 'mail' ? ' is-open' : ''}`}>
          <button
            type="button"
            aria-expanded={openKey === 'mail'}
            aria-haspopup="true"
            onClick={() => toggle('mail')}
          >
            <span className="side-tool-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 7 9-7" />
              </svg>
            </span>
            <span className="side-tool-txt">邮箱咨询</span>
          </button>
          <div className="side-popover-box popover-mail">
            <div className="popover-header">
              <div className="popover-title">邮箱咨询</div>
              <div className="popover-sub">说明产品场景、接口与预估用量</div>
            </div>
            <a className="contact-chip" href={`mailto:${EMAIL}`}>
              <span className="contact-chip-label">邮箱</span>
              <span className="contact-chip-value">{EMAIL}</span>
            </a>
          </div>
        </li>

        <li className={`side-tool-item side-tool-phone${openKey === 'phone' ? ' is-open' : ''}`}>
          <button
            type="button"
            aria-expanded={openKey === 'phone'}
            aria-haspopup="true"
            onClick={() => toggle('phone')}
          >
            <span className="side-tool-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="side-tool-txt">电话咨询</span>
          </button>
          <div className="side-popover-box popover-phone">
            <div className="popover-header">
              <div className="popover-title">咨询热线</div>
              <div className="popover-sub">语音模块询价与方案定制</div>
            </div>
            <a className="contact-chip" href={`tel:${PHONE}`}>
              <span className="contact-chip-label">电话</span>
              <span className="contact-chip-value">{PHONE}</span>
            </a>
          </div>
        </li>

        <li className="side-tool-item side-tool-online">
          <Link to={ROUTES.contact} title="前往联系我们">
            <span className="side-tool-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className="side-tool-txt">联系我们</span>
          </Link>
        </li>

        <li className="side-tool-item side-tool-totop">
          <button type="button" aria-label="返回顶部" onClick={scrollToTop}>
            <span className="side-tool-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </span>
            <span className="side-tool-txt">返回顶部</span>
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default SideTools
