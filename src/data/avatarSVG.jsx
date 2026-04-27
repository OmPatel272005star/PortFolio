import React from "react";

export default function AvatarSVG() {
  return (
    <div className="w-full aspect-square border-2 border-black shadow-brutal mb-3 overflow-hidden">
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
        <style>{`
          @keyframes ya-blink { 0%,88%,100% { opacity:1 } 94% { opacity:0 } }
          @keyframes ya-scan  { 0% { transform:translateY(-8px) } 100% { transform:translateY(168px) } }
          @keyframes ya-pulse { 0%,100% { opacity:1 } 50% { opacity:0.15 } }
          @keyframes ya-flicker { 0%,100% { opacity:0.8 } 45% { opacity:0.3 } 75% { opacity:1 } }
          @keyframes ya-glitch { 0%,100% { transform:translate(0,0) } 20% { transform:translate(-3px,1px) } 40% { transform:translate(2px,-1px) } 60% { transform:translate(-1px,2px) } 80% { transform:translate(1px,-1px) } }
          .ya-scan    { animation: ya-scan 2.8s linear infinite; opacity:0.06 }
          .ya-eye-l   { animation: ya-blink 3.8s infinite }
          .ya-eye-r   { animation: ya-blink 3.8s 0.12s infinite }
          .ya-cur     { animation: ya-pulse 1s infinite }
          .ya-txt     { animation: ya-flicker 5s infinite }
          .ya-face    { animation: ya-glitch 8s infinite step-end }
        `}</style>

        {/* Background */}
        <rect width="160" height="160" fill="#0a0900"/>
        <defs>
          <pattern id="ya-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M8 0L0 0 0 8" fill="none" stroke="#f5c400" strokeWidth="0.25"/>
          </pattern>
        </defs>
        <rect width="160" height="160" fill="url(#ya-grid)" opacity="0.09"/>

        {/* Scanline */}
        <rect className="ya-scan" x="0" y="0" width="160" height="5" fill="#f5c400"/>

        {/* Frame border */}
        <rect x="3" y="3" width="154" height="154" fill="none" stroke="#f5c400" strokeWidth="0.8" opacity="0.4"/>

        {/* Corner brackets */}
        <rect x="3"   y="3"   width="12" height="2"  fill="#f5c400"/>
        <rect x="3"   y="3"   width="2"  height="12" fill="#f5c400"/>
        <rect x="145" y="3"   width="12" height="2"  fill="#f5c400"/>
        <rect x="155" y="3"   width="2"  height="12" fill="#f5c400"/>
        <rect x="3"   y="145" width="2"  height="12" fill="#f5c400"/>
        <rect x="3"   y="155" width="12" height="2"  fill="#f5c400"/>
        <rect x="145" y="155" width="12" height="2"  fill="#f5c400"/>
        <rect x="155" y="145" width="2"  height="12" fill="#f5c400"/>

        {/* Spiky hair */}
        <g fill="#080808">
          <rect x="44"  y="44" width="74" height="16"/>
          <rect x="44"  y="24" width="8"  height="24"/>
          <rect x="55"  y="16" width="7"  height="32"/>
          <rect x="66"  y="11" width="8"  height="37"/>
          <rect x="77"  y="14" width="7"  height="34"/>
          <rect x="87"  y="20" width="8"  height="28"/>
          <rect x="98"  y="27" width="7"  height="21"/>
          <rect x="108" y="34" width="6"  height="14"/>
          <rect x="41"  y="32" width="4"  height="12"/>
        </g>
        {/* Hair accent streak */}
        <rect x="66" y="11" width="2" height="30" fill="#f5c400" opacity="0.7"/>

        {/* Head */}
        <g className="ya-face">
          <rect x="44"  y="46" width="74" height="62" fill="#c8a070"/>
          <rect x="44"  y="46" width="8"  height="62" fill="#aa8055" opacity="0.5"/>
          <rect x="110" y="46" width="8"  height="62" fill="#aa8055" opacity="0.5"/>
        </g>

        {/* Earbuds */}
        <rect x="36"  y="56" width="10" height="20" fill="#0a0900"/>
        <rect x="116" y="56" width="10" height="20" fill="#0a0900"/>
        <rect x="34"  y="61" width="6"  height="8"  fill="#1a1a00"/>
        <rect x="122" y="61" width="6"  height="8"  fill="#1a1a00"/>
        <rect x="34"  y="63" width="3"  height="4"  fill="#f5c400" opacity="0.9"/>
        <rect x="125" y="63" width="3"  height="4"  fill="#f5c400" opacity="0.9"/>
        <rect x="37"  y="69" width="2"  height="20" fill="#333300"/>
        <rect x="123" y="69" width="2"  height="20" fill="#333300"/>

        {/* Visor — yellow tinted */}
        <rect x="46" y="63" width="70" height="20" fill="#0a0800" rx="2"/>
        <rect x="48" y="65" width="66" height="16" fill="#110f00" rx="1"/>
        <rect x="48" y="65" width="66" height="2"  fill="#f5c400" opacity="0.6"/>
        <rect x="48" y="69" width="66" height="1"  fill="#f5c400" opacity="0.3"/>
        <rect x="48" y="73" width="66" height="1"  fill="#f5c400" opacity="0.2"/>
        <rect x="48" y="77" width="66" height="1"  fill="#f5c400" opacity="0.4"/>

        {/* Left eye */}
        <g className="ya-eye-l">
          <rect x="54" y="67" width="22" height="12" fill="#f5c400" opacity="0.12"/>
          <rect x="58" y="69" width="14" height="8"  fill="#f5c400" opacity="0.35"/>
          <rect x="62" y="71" width="6"  height="4"  fill="#fff"    opacity="0.85"/>
          <rect x="63" y="72" width="3"  height="2"  fill="#f5c400"/>
        </g>

        {/* Right eye */}
        <g className="ya-eye-r">
          <rect x="86" y="67" width="22" height="12" fill="#f5c400" opacity="0.12"/>
          <rect x="90" y="69" width="14" height="8"  fill="#f5c400" opacity="0.35"/>
          <rect x="94" y="71" width="6"  height="4"  fill="#fff"    opacity="0.85"/>
          <rect x="95" y="72" width="3"  height="2"  fill="#f5c400"/>
        </g>

        {/* Nose */}
        <rect x="78" y="88" width="6" height="4" fill="#aa8055"/>
        <rect x="76" y="90" width="3" height="3" fill="#906535"/>
        <rect x="83" y="90" width="3" height="3" fill="#906535"/>

        {/* Smirk */}
        <rect x="64" y="100" width="20" height="3" fill="#4a2a10"/>
        <rect x="82" y="97"  width="5"  height="3" fill="#4a2a10"/>
        <rect x="85" y="94"  width="3"  height="3" fill="#4a2a10"/>
        <rect x="66" y="100" width="16" height="2" fill="#e8c870" opacity="0.3"/>

        {/* Under-eye shadow */}
        <rect x="56" y="80" width="20" height="2" fill="#906535" opacity="0.35"/>
        <rect x="86" y="80" width="20" height="2" fill="#906535" opacity="0.35"/>

        {/* Neck */}
        <rect x="72" y="108" width="18" height="12" fill="#c8a070"/>

        {/* Hoodie */}
        <rect x="28"  y="118" width="102" height="42" fill="#0a0a00"/>
        <rect x="72"  y="118" width="18"  height="42" fill="#050500" opacity="0.8"/>
        <rect x="52"  y="130" width="58"  height="18" fill="#0d0d00"/>
        <rect x="54"  y="132" width="54"  height="14" fill="#111100"/>
        <rect x="36"  y="118" width="14"  height="8"  fill="#141400"/>
        <rect x="112" y="118" width="14"  height="8"  fill="#141400"/>

        {/* Terminal text */}
        <g className="ya-txt">
          <text x="58" y="139" fontFamily="monospace" fontSize="5" fill="#f5c400" opacity="0.9">&gt; run.sh</text>
          <text x="58" y="146" fontFamily="monospace" fontSize="5" fill="#f5c400" opacity="0.55">om_patel_</text>
          <rect className="ya-cur" x="94" y="141" width="3" height="5" fill="#f5c400"/>
        </g>

        {/* HUD bars */}
        <rect x="126" y="14" width="22" height="3" fill="#222200"/>
        <rect x="126" y="14" width="16" height="3" fill="#f5c400" opacity="0.6"/>
        <rect x="126" y="19" width="22" height="3" fill="#222200"/>
        <rect x="126" y="19" width="9"  height="3" fill="#f5c400" opacity="0.4"/>
        <rect x="126" y="24" width="22" height="3" fill="#222200"/>
        <rect x="126" y="24" width="19" height="3" fill="#f5c400" opacity="0.25"/>
        <text x="126" y="12" fontFamily="monospace" fontSize="4" fill="#f5c400" opacity="0.45">SYS</text>

        {/* Bottom HUD */}
        <text x="10" y="152" fontFamily="monospace" fontSize="4" fill="#f5c400" opacity="0.35">X:81 Y:03</text>
        <text x="10" y="158" fontFamily="monospace" fontSize="4" fill="#f5c400" opacity="0.25">FRAME:042</text>

        {/* Glitch slices */}
        <rect x="0"   y="60"  width="10" height="2" fill="#f5c400" opacity="0.25"/>
        <rect x="150" y="90"  width="10" height="2" fill="#f5c400" opacity="0.2"/>
        <rect x="0"   y="106" width="8"  height="1" fill="#fff"    opacity="0.1"/>
        <rect x="152" y="116" width="8"  height="2" fill="#f5c400" opacity="0.15"/>

        {/* Pixel noise */}
        <rect x="20" y="16" width="2" height="2" fill="#f5c400" opacity="0.25"/>
        <rect x="26" y="20" width="2" height="2" fill="#f5c400" opacity="0.2"/>
        <rect x="14" y="24" width="2" height="2" fill="#fff"    opacity="0.08"/>
        <rect x="30" y="14" width="2" height="2" fill="#f5c400" opacity="0.15"/>
      </svg>
    </div>
  );
}