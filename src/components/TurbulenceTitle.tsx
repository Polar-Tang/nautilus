import React from "react"

type ComponentProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TurbulenceTitle = ({title, ...props}: ComponentProps) => {
  return (
    <>
    
    <svg width="0" height="0" >
          <filter id="water-effect" >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.02"
              numOctaves="3"
              result="noise" >
              <animate

                attributeName="baseFrequency"
                values="0.01 0.02; 0.02 0.03; 0.01 0.02"
                dur="4s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G" />
          </filter>
        </svg>

            <h3  {...props}  style={{ filter: 'url(#water-effect)' }}  >{title} </h3>

<svg width="0" height="0" >
  <filter id="shake-effect" >
    <feTurbulence type="fractalNoise" baseFrequency="0" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G">
      <animate  attributeName="scale" values="0; 10; 0" dur="0.5s" repeatCount="1" />
    </feDisplacementMap>
  </filter>
</svg>
    </>
  )
}

export default TurbulenceTitle