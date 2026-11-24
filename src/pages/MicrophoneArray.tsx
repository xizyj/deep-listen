import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useIntersectionFadeIn } from '../hooks/useIntersectionFadeIn';
import { ROUTES } from '../constants/routes';
import '../styles/MicrophoneArray.css';

const IMG = '/images/microphone-array';

const configRows = [
  {
    item: '拾音结构',
    circular: '6 MEMS，环形排布',
    linear: '4 / 6 / 8 MEMS，线性阵列',
  },
  {
    item: '音频处理',
    circular: '多麦波束成型、DNN 深度神经网络、AEC 回声消除、AES 回声抑制、AGC 自动增益',
    linear: '波束成型、聚焦目标方向人声、噪声抑制、AEC 回声消除、AGC 自动增益、均衡语音音量',
  },
  {
    item: '硬件与接口',
    circular: '双核 Xtensa，USB / 串口 / I²S',
    linear: 'USB / 串口',
  },
  {
    item: '应用场景',
    circular: '360° 平面声源定位 + 端侧语音识别',
    linear: '视频会议、智能终端、远场语音交互',
  },
];

const circularSpecs = {
  acoustic: [
    { label: '采样率 / 位深', value: '48 kHz / 16 bit' },
    { label: '环形拾音', value: '360°，安静室内约 3 m' },
    { label: '频率响应', value: '100 Hz – 16 kHz' },
    { label: '麦克风灵敏度', value: '−38 ± 3 dBV/Pa（1 kHz）' },
    { label: '麦克风信噪比', value: '65 dB(A)' },
  ],
  electrical: [
    { label: '麦克风间距', value: '30 mm' },
    { label: 'USB 供电电压', value: 'DC 5 V ± 5%' },
    { label: '工作电流', value: '≤ 300 mA（仅拾音）' },
    { label: '处理板尺寸', value: '70 × 40 mm（独立板）' },
    { label: '拾音板尺寸', value: 'Ø80 mm' },
  ],
};

const linearSpecs = {
  acoustic: [
    { label: '采样率 / 位深', value: '48 kHz / 16 bit' },
    { label: '前方拾音', value: '安静室内约 3 m' },
    { label: '频率响应', value: '100 Hz – 16 kHz' },
    { label: '麦克风灵敏度', value: '−38 ± 3 dBV/Pa（1 kHz）' },
    { label: '麦克风信噪比', value: '65 dB(A)' },
  ],
  electrical: [
    { label: '麦克风间距', value: '45 mm' },
    { label: 'USB 供电电压', value: 'DC 5 V ± 5%' },
    { label: '工作电流', value: '≤ 200 mA（仅拾音）' },
    { label: '处理板尺寸', value: '110 × 18.5 mm' },
    { label: '拾音板尺寸', value: '150 × 5.5 mm' },
  ],
};

const MicrophoneArray = () => {
  useIntersectionFadeIn({ visibleClass: 'visible' });

  return (
    <Layout>
      <div className="mic-array-page">
        <div className="page-header">
          <div className="container">
            <p className="page-eyebrow">AUDIO FRONT END</p>
            <h1>语音识别拾音阵列</h1>
            <p>面向高噪声语音识别与远场语音交互</p>
          </div>
        </div>

        <div className="mic-array-content">
          <div className="container">
            <section className="modules-grid fade-in-section">
              <article className="module-card">
                <div className="module-image">
                  <img
                    src={`${IMG}/circular-6mic-hero.png`}
                    alt="环形六麦阵列模组"
                    loading="lazy"
                  />
                </div>
                <div className="module-body">
                  <h2>环形六麦阵列模组</h2>
                  <p className="module-tagline">高噪声场景的前端降噪</p>
                  <p>
                    六麦环形排布，覆盖 360° 平面声源定位与端侧语音识别，
                    适用于会议室、智能音箱等高噪声远场场景。
                  </p>
                </div>
              </article>

              <article className="module-card">
                <div className="module-image module-image--light">
                  <img
                    src={`${IMG}/linear-4mic-hero.png`}
                    alt="线性四麦阵列模组"
                    loading="lazy"
                  />
                </div>
                <div className="module-body">
                  <h2>线性四麦阵列模组</h2>
                  <p className="module-tagline">动态波束成型 + 端侧语音识别</p>
                  <p>
                    线性阵列聚焦目标方向人声，支持 4 / 6 / 8 MEMS 配置，
                    适用于视频会议、智能终端与远场语音交互。
                  </p>
                </div>
              </article>
            </section>

            <section className="solution-boards fade-in-section">
              <h2 className="section-title">方案图</h2>
              <div className="boards-grid">
                <div className="board-card">
                  <div className="board-image">
                    <img
                      src={`${IMG}/circular-6mic-top.png`}
                      alt="环形拾音阵列俯视图"
                      loading="lazy"
                    />
                  </div>
                  <h3>环形拾音阵列</h3>
                  <p>六麦环形结构，俯视可见均匀麦孔排布</p>
                </div>
                <div className="board-card">
                  <div className="board-image board-image--pcb">
                    <img
                      src={`${IMG}/linear-array-pcb.png`}
                      alt="线性拾音阵列与音频处理模组 PCB"
                      loading="lazy"
                    />
                  </div>
                  <h3>线性拾音阵列</h3>
                  <p>线性麦阵板与主控处理板分体设计</p>
                </div>
                <div className="board-card">
                  <div className="board-image board-image--pcb">
                    <img
                      src={`${IMG}/audio-processing-module.png`}
                      alt="音频处理模组"
                      loading="lazy"
                    />
                  </div>
                  <h3>音频处理模组</h3>
                  <p>USB / UART / MIC / SPK 接口，便于整机对接</p>
                </div>
              </div>
            </section>

            <section className="config-section fade-in-section">
              <h2 className="section-title">技术配置</h2>
              <div className="config-table-wrap">
                <table className="config-table">
                  <thead>
                    <tr>
                      <th>项目</th>
                      <th>环形六麦阵列模组</th>
                      <th>线性四麦阵列模组</th>
                    </tr>
                  </thead>
                  <tbody>
                    {configRows.map((row) => (
                      <tr key={row.item}>
                        <th scope="row">{row.item}</th>
                        <td>{row.circular}</td>
                        <td>{row.linear}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="specs-section fade-in-section">
              <h2 className="section-title">参考规格</h2>
              <div className="specs-grid">
                <div className="spec-card">
                  <h3>环形六麦阵列参考规格</h3>
                  <div className="spec-group">
                    <h4>拾音与声学</h4>
                    <dl className="spec-list">
                      {circularSpecs.acoustic.map((item) => (
                        <div key={item.label} className="spec-row">
                          <dt>{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="spec-group">
                    <h4>电气与结构</h4>
                    <dl className="spec-list">
                      {circularSpecs.electrical.map((item) => (
                        <div key={item.label} className="spec-row">
                          <dt>{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="spec-card">
                  <h3>线性四麦阵列参考规格</h3>
                  <div className="spec-group">
                    <h4>拾音与声学</h4>
                    <dl className="spec-list">
                      {linearSpecs.acoustic.map((item) => (
                        <div key={item.label} className="spec-row">
                          <dt>{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="spec-group">
                    <h4>电气与结构</h4>
                    <dl className="spec-list">
                      {linearSpecs.electrical.map((item) => (
                        <div key={item.label} className="spec-row">
                          <dt>{item.label}</dt>
                          <dd>{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
              <p className="specs-note">
                线性四麦参考规格为拟定值，实际性能以实测为准。
              </p>
            </section>
          </div>
        </div>

        <div className="contact-section fade-in-section">
          <div className="container">
            <h2>联系我们</h2>
            <p>如需选型、打样或定制拾音阵列方案，请联系我们的销售团队</p>
            <Link to={ROUTES.contact} className="btn btn-primary">
              联系销售
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MicrophoneArray;
