import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 150px;
  max-width: 400px;

  @media (${(props) => props.theme.breakpointMedium}) {
    top: 5vw;
    width: 200px;
    max-width: 800px;
  }
`;

const FaceWoman = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 143.25 202"
        enableBackground="new 0 0 143.25 202"
      >
        <g id="elements">
          <g id="woman">
            <g id="head">
              <g id="face_and_ears">
                <path
                  id="face"
                  fill="#C69C6D"
                  d="M135.51,115c0,35.35-28.65,87-64,87s-64-51.65-64-87s0-86,64-86
						C128.02,29,135.51,79.65,135.51,115z"
                />
                <g id="ears">
                  <path
                    fill="#C69C6D"
                    d="M15.04,138.46c0,0-5.74-18-12.03-14.72c-6.29,3.28,1.68,13.85,4.51,20.71
							c2.83,6.85,0.62,13.63,4.85,16.5S20.97,150.91,15.04,138.46z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M128.22,138.46c0,0,5.74-18,12.03-14.72c6.29,3.28-1.68,13.85-4.51,20.71
							c-2.83,6.85-0.62,13.63-4.85,16.5C126.66,163.81,122.29,150.91,128.22,138.46z"
                  />
                </g>
              </g>
              <g id="lips">
                <g>
                  <path
                    fill="#A38161"
                    d="M53.39,169.59c4.58-1.34,14.09-3.52,18.24,0.08v5.08c0,0-10.3-0.2-18.31-3.25
							C52.41,171.15,52.46,169.86,53.39,169.59z"
                  />
                  <path
                    fill="#A38161"
                    d="M89.87,169.59c-4.58-1.34-14.09-3.52-18.24,0.08v5.08c0,0,10.3-0.2,18.31-3.25
							C90.84,171.15,90.79,169.86,89.87,169.59z"
                  />
                </g>
                <path
                  fill="#A38161"
                  d="M54.41,176.15c-0.84-0.7-0.11-2.06,0.93-1.72c4.13,1.31,10.48,2.95,16.28,2.95
						c6.26,0,13.15-1.91,17.22-3.25c1-0.33,1.77,0.9,1.03,1.65c-3.29,3.31-9.62,8.22-18.25,8.22C64.98,184,58.34,179.44,54.41,176.15
						z"
                />
              </g>
              <g id="nose">
                <path
                  fill="#A38161"
                  d="M60.61,138c0,0-3.98,2.14-3.98,7.35c0,2.62,3.08,5,9.49,5.51c0,0,1.22,2.14,5.51,2.14v-4.27
						c0,0-1.84,0.6-5.2-0.32c0,0-4.59-2.14-5.2-1.22c-0.54,0.81-0.61,1.22-0.61,1.22S56.32,145.35,60.61,138z"
                />
                <path
                  fill="#A38161"
                  d="M82.65,138c0,0,3.98,2.14,3.98,7.35c0,2.62-3.08,5-9.49,5.51c0,0-1.22,2.14-5.51,2.14v-4.27
						c0,0,1.84,0.6,5.2-0.32c0,0,4.59-2.14,5.2-1.22c0.54,0.81,0.61,1.22,0.61,1.22S86.93,145.35,82.65,138z"
                />
              </g>
              <g id="hair">
                <ellipse
                  fill="#8C6239"
                  cx="71.63"
                  cy="20.5"
                  rx="36"
                  ry="20.5"
                />
                <path
                  fill="#8C6239"
                  d="M70.53,47.06c0,18.69-6.6,13.19-28.59,26.39s-28.59,34.08-28.59,46.18s4.4,37.38,4.4,37.38
						S3.18,128.28,0.63,104c-2-19,1-30,6-42c5.11-12.26,16-22,28-28c19.64-9.82,35.9-13.33,35.9-3.44
						C70.53,39.36,70.53,47.06,70.53,47.06z"
                />
                <path
                  fill="#8C6239"
                  d="M72.73,47.06c0,18.69,6.6,13.19,28.59,26.39s28.59,34.08,28.59,46.18S125.5,157,125.5,157
						s14.57-28.72,17.13-53c2-19-1-30-6-42c-5.11-12.26-16-22-28-28c-19.64-9.82-35.9-13.33-35.9-3.44
						C72.73,39.36,72.73,47.06,72.73,47.06z"
                />
              </g>
              <path
                id="leftBrows"
                display="none"
                fill="#8C6239"
                d="M59.15,100.95c0.51,0.59,1.46,0.41,1.71-0.33
					c0.45-1.38,0.9-3.28,0.74-5.06c-0.31-3.34-27.54-5.84-33.04,1.25C28.55,96.81,53.7,94.67,59.15,100.95z"
              />
              <path
                id="rightBrows"
                display="none"
                fill="#8C6239"
                d="M82.1,100.95c-0.51,0.59-1.46,0.41-1.71-0.33
					c-0.45-1.38-0.9-3.28-0.74-5.06c0.31-3.34,27.54-5.84,33.04,1.25C112.7,96.81,87.55,94.67,82.1,100.95z"
              />
            </g>
          </g>
          <g id="man">
            <path
              display="none"
              fill="#8C6239"
              d="M6.23,196.09c-0.51,0.59-1.46,0.41-1.71-0.33c-0.45-1.38-0.9-3.28-0.74-5.06
				c0.31-3.34,27.54-5.84,33.04,1.25C36.84,191.95,11.69,189.81,6.23,196.09z"
            />
          </g>
        </g>
        <g id="overlay">
          <g id="tattoo">
            <path
              id="colonist"
              fill="#333333"
              d="M30.37,88.45c-5.58,6.44-9.99,15.02-11.91,26.41c-0.31,1.84,1.84,3.11,3.26,1.89
				c4.4-3.79,10.95-7.94,20.41-10.87c1.17-0.36,1.74-1.68,1.2-2.78c-1.76-3.6-5.2-8.91-9.89-14.6
				C32.65,87.54,31.19,87.51,30.37,88.45z"
            />
            <path
              id="locked"
              fill="#333333"
              d="M50.46,76.02l-0.18-0.18c-0.58-0.58-1.47-0.76-2.22-0.42c-3.95,1.8-7.93,4.14-11.66,7.18
				c-0.87,0.71-1.02,1.98-0.3,2.84c5.28,6.33,9.51,12.74,11.42,17.29c0.37,0.89,1.31,1.39,2.25,1.2c5.22-1.06,11.15-1.75,17.86-1.91
				v-0.03C67.63,98.22,60.58,86.63,50.46,76.02z"
            />
            <path
              id="extraction"
              fill="#333333"
              d="M107.09,82.31c-3.72-3.03-7.7-5.36-11.67-7.12c-0.75-0.33-1.63-0.16-2.21,0.42l-0.31,0.31
				C82.72,86.55,75.63,98.2,75.63,101.99v0.11c6.6,0.27,12.47,1.07,17.66,2.22c0.94,0.21,1.91-0.29,2.27-1.18
				c1.86-4.64,6.29-11.37,11.83-17.98C108.11,84.3,107.96,83.02,107.09,82.31z"
            />
            <path
              id="government"
              fill="#333333"
              d="M110.03,88.23c-5.03,6.07-8.66,11.74-10.36,15.38c-0.51,1.09,0.04,2.39,1.18,2.76
				c9.62,3.11,16.35,7.4,20.83,11.16c1.41,1.18,3.55,0.02,3.28-1.8c-1.79-11.99-6.21-20.92-11.87-27.54
				C112.3,87.25,110.83,87.27,110.03,88.23z"
            />
            <path
              id="religion"
              fill="#333333"
              d="M87.85,75.48c1.01-1.11,0.47-2.88-0.97-3.27c-6.05-1.66-11.56-2.2-15.4-2.2
				c-3.58,0-9.02,0.57-15.08,2.3c-1.41,0.4-1.89,2.16-0.91,3.25c6.18,6.84,11.62,14.45,14.33,20.23c0.73,1.55,2.9,1.55,3.63,0
				C76.16,90,81.63,82.34,87.85,75.48z"
            />
            <path
              id="words"
              fill="#333333"
              d="M44.95,151.63l-21.08-1.64c-1.45-0.11-2.54,1.32-2.04,2.69c1.24,3.41,2.72,6.66,4.37,9.76
				c0.32,0.6,0.93,0.99,1.61,1.05l16.39,1.27c1.19,0.09,2.2-0.87,2.15-2.07c-0.11-2.74,0.01-5.68,0.43-8.82
				C46.92,152.74,46.08,151.72,44.95,151.63z"
            />
            <path
              id="lands"
              fill="#333333"
              d="M48.27,146.2c0.73-2.88,1.69-5.9,2.9-9.08c0.47-1.24-0.39-2.59-1.71-2.7l-29.6-2.3
				c-1.24-0.1-2.26,0.95-2.15,2.19c0.31,3.41,0.85,6.73,1.6,9.93c0.2,0.84,0.93,1.46,1.79,1.52l25.07,1.95
				C47.15,147.79,48.03,147.15,48.27,146.2z"
            />
            <path
              id="seas"
              fill="#333333"
              d="M45.56,168.88l-12.24-0.95c-1.68-0.13-2.78,1.76-1.8,3.13c7.58,10.66,17.16,18.64,26.01,23.06
				c2.08,1.04,3.95-1.78,2.18-3.3c-5.03-4.34-10.21-10.9-12.37-20.41C47.15,169.56,46.42,168.94,45.56,168.88z"
            />
            <path
              id="resources"
              fill="#333333"
              d="M99.05,164.76l16.39-1.27c0.68-0.05,1.29-0.44,1.61-1.05c1.65-3.09,3.12-6.35,4.37-9.76
				c0.5-1.37-0.59-2.8-2.04-2.69l-21.08,1.64c-1.13,0.09-1.97,1.11-1.83,2.24c0.41,3.14,0.54,6.08,0.43,8.82
				C96.86,163.89,97.86,164.85,99.05,164.76z"
            />
            <path
              id="nature"
              fill="#333333"
              d="M95.91,170.4c-2.16,9.51-7.34,16.08-12.37,20.41c-1.76,1.52,0.1,4.34,2.18,3.3
				c8.85-4.42,18.43-12.4,26.01-23.06c0.98-1.37-0.12-3.26-1.8-3.13l-12.24,0.95C96.83,168.94,96.1,169.56,95.91,170.4z"
            />
            <path
              id="society"
              fill="#333333"
              d="M123.94,144.24c0.75-3.21,1.3-6.52,1.6-9.93c0.11-1.24-0.91-2.29-2.15-2.19l-29.6,2.3
				c-1.33,0.1-2.19,1.45-1.71,2.7c1.21,3.18,2.16,6.2,2.9,9.08c0.24,0.95,1.12,1.6,2.1,1.52l25.07-1.95
				C123.01,145.7,123.74,145.09,123.94,144.24z"
            />
            <path
              id="country"
              fill="#333333"
              d="M75.78,131.65l46.39-3.46c1.65-0.12,2.45-2.07,1.36-3.31c-5-5.69-18.78-17.49-47.82-18.76
				c-1.13-0.05-2.07,0.87-2.07,2v21.54C73.63,130.82,74.62,131.74,75.78,131.65z"
            />
            <path
              id="independence"
              fill="#333333"
              d="M67.04,105.89C36.42,106.64,23.31,119,18.82,124.8c-0.98,1.26-0.17,3.1,1.42,3.23
				l46.68,3.63c1.16,0.09,2.16-0.83,2.16-1.99v-21.77C69.07,106.78,68.16,105.87,67.04,105.89z"
            />
            <g id="icons">
              <g id="icon_words">
                <g>
                  <polygon
                    fill="#C69C6D"
                    points="31.3,159.37 35.26,159.39 39.23,159.37 41.56,158.52 39.51,161.35 35.26,161.35 31.02,161.35 
							28.97,158.52 					"
                  />
                </g>
                <g>
                  <path
                    fill="#C69C6D"
                    d="M38.45,154.26v2.32c0,0.27-0.22,0.49-0.49,0.49h-4.45l1.42,1.2l-3.18-1.08
							c-0.2-0.07-0.33-0.25-0.33-0.46v-2.46c0-0.27,0.22-0.49,0.49-0.49h6.05C38.23,153.77,38.45,153.99,38.45,154.26z"
                  />
                </g>
              </g>
              <path
                id="icon_seas"
                fill="#C69C6D"
                d="M43.3,177.8c-1.45,0.02-2.89,0.09-4.34,0.02c-0.13-0.01-0.23-0.11-0.24-0.24
					c-0.32-8.9,9.21-7.64,7.1-3.16c-0.58,0.85-1.78,1.08-2.67,0.52c-1.05-0.58-0.8-2.19,0.37-2.25c0.27,0.02,0.65,0.34,0.73,0.61
					c0.04,0.28-0.29,0.83-0.6,1.03c1.64,0.84,2.39-2.13,0.03-2.49c-0.98-0.14-2.14,0.38-2.58,1.18c-0.9,1.7,0.67,3.46,2.32,4.32
					C43.65,177.45,43.56,177.79,43.3,177.8z"
              />
              <g id="icon_society">
                <polygon
                  fill="#C69C6D"
                  points="102.78,137.88 102.78,138.89 101.77,138.89 100.77,138.89 100.77,140.9 101.77,140.9 
						102.78,140.9 102.78,141.9 102.78,143.91 101.77,143.91 101.77,141.9 100.77,141.9 99.76,141.9 98.75,141.9 98.75,143.91 
						97.75,143.91 97.75,141.9 97.75,140.9 98.75,140.9 99.76,140.9 99.76,138.89 98.75,138.89 97.75,138.89 97.75,137.88 
						97.75,135.87 98.75,135.87 98.75,137.88 99.76,137.88 100.77,137.88 101.77,137.88 101.77,135.87 102.78,135.87 				"
                />
                <polygon
                  fill="#C69C6D"
                  points="111.43,137.88 111.43,138.89 110.43,138.89 109.42,138.89 109.42,140.9 110.43,140.9 
						111.43,140.9 111.43,141.9 111.43,143.91 110.43,143.91 110.43,141.9 109.42,141.9 108.41,141.9 107.41,141.9 107.41,143.91 
						106.4,143.91 106.4,141.9 106.4,140.9 107.41,140.9 108.41,140.9 108.41,138.89 107.41,138.89 106.4,138.89 106.4,137.88 
						106.4,135.87 107.41,135.87 107.41,137.88 108.41,137.88 109.42,137.88 110.43,137.88 110.43,135.87 111.43,135.87 				"
                />
                <polygon
                  fill="#C69C6D"
                  points="120.08,137.88 120.08,138.89 119.08,138.89 118.07,138.89 118.07,140.9 119.08,140.9 
						120.08,140.9 120.08,141.9 120.08,143.91 119.08,143.91 119.08,141.9 118.07,141.9 117.07,141.9 116.06,141.9 116.06,143.91 
						115.06,143.91 115.06,141.9 115.06,140.9 116.06,140.9 117.07,140.9 117.07,138.89 116.06,138.89 115.06,138.89 115.06,137.88 
						115.06,135.87 116.06,135.87 116.06,137.88 117.07,137.88 118.07,137.88 119.08,137.88 119.08,135.87 120.08,135.87 				"
                />
              </g>
              <g id="icon_resources">
                <polygon
                  fill="#C69C6D"
                  points="104.1,158.49 101.47,156.74 99.71,157.98 99.18,157.24 100.63,156.21 99.19,155.21 
						99.71,154.45 101.47,155.67 104.1,153.92 107.54,156.2 				"
                />
                <polygon
                  fill="#C69C6D"
                  points="113.36,160.78 110.73,159.03 108.97,160.27 108.44,159.52 109.89,158.5 108.45,157.5 
						108.97,156.74 110.73,157.96 113.36,156.2 116.79,158.49 				"
                />
              </g>
              <path
                id="icon_nature"
                fill="#C69C6D"
                d="M104.65,177.79c-3.05,0-3.05-3.05-3.05-3.05c0,3.04-3.04,3.05-3.05,3.05
					c0-3.05,3.05-3.05,3.05-3.05c-3.05,0-3.05-3.05-3.05-3.05c3.05,0,3.05,3.05,3.05,3.05c0-3.04,3.04-3.05,3.05-3.05
					c0,3.05-3.05,3.05-3.05,3.05C104.65,174.74,104.65,177.79,104.65,177.79z"
              />
              <g id="icon_lands">
                <polygon
                  fill="#C69C6D"
                  points="25,144.17 28.36,140.81 31.2,143.65 33.96,140.88 36.61,143.53 39.44,140.7 42.92,144.17 				
						"
                />
                <polygon
                  fill="#C69C6D"
                  points="28.17,138.95 31.33,135.79 33.85,138.31 36.55,135.61 39.86,138.92 				"
                />
              </g>
              <g id="icon_religion">
                <path
                  fill="#C69C6D"
                  d="M76.24,81.84c0.21-0.16,0.5,0.06,0.38,0.3c-1.02,2.15-3.2,3.76-5.66,3.23
						c-2.32-0.43-3.82-1.83-4.35-4.13c-0.67-2.53,0.89-4.88,3.17-5.95c0.24-0.11,0.47,0.18,0.3,0.38
						C66.69,80.01,71.87,85.27,76.24,81.84z"
                />
                <path
                  fill="#C69C6D"
                  d="M72.83,79.83c-0.09,0.05-0.2-0.03-0.18-0.13c0.08-0.51,0.16-0.98,0.25-1.45c0.03-0.14,0-0.22-0.1-0.31
						c-0.35-0.34-0.7-0.66-1.04-1.01c-0.07-0.07-0.03-0.2,0.07-0.22c0.52-0.08,1.03-0.15,1.53-0.24c0.03-0.01,0.07-0.04,0.09-0.06
						c0.24-0.44,0.47-0.9,0.7-1.36c0.05-0.09,0.18-0.09,0.23,0c0.24,0.46,0.47,0.91,0.72,1.35c0.02,0.03,0.06,0.06,0.09,0.06
						c0.5,0.09,1.01,0.16,1.51,0.23c0.1,0.01,0.14,0.14,0.07,0.21c-0.3,0.31-0.59,0.63-0.9,0.93c-0.17,0.16-0.23,0.31-0.18,0.55
						c0.09,0.42,0.15,0.84,0.22,1.29c0.02,0.1-0.09,0.18-0.18,0.14c-0.48-0.23-0.93-0.49-1.42-0.72c-0.03-0.01-0.08-0.01-0.11,0
						C73.75,79.34,73.31,79.58,72.83,79.83z"
                />
              </g>
              <g id="icon_colonist">
                <path
                  fill="#C69C6D"
                  d="M28.7,104.37c0.1-0.34-0.08-0.57-0.24-0.82c-0.46-0.71-0.89-1.44-1.15-2.26
						c-0.14-0.43-0.27-0.86-0.21-1.32c0.1-0.78,0.59-1.28,1.39-1.36c0.33-0.03,0.67-0.01,1.03-0.01c0.27-0.39,0.43-0.44,0.84-0.25
						c0.27-0.56,0.61-0.73,1.16-0.56c0.02-0.03,0.04-0.05,0.05-0.08c0.2-0.47,0.54-0.77,1.03-0.9c0.11-0.03,0.14-0.07,0.14-0.18
						c0-0.13,0.01-0.26,0.02-0.41c-0.23,0.04-0.44,0.07-0.66,0.11c0-0.2,0-0.39,0-0.59c0.22,0.04,0.43,0.07,0.66,0.11
						c-0.04-0.23-0.07-0.43-0.11-0.65c0.2,0,0.38,0,0.6,0c-0.04,0.21-0.07,0.42-0.11,0.65c0.23-0.04,0.44-0.07,0.66-0.11
						c0,0.2,0,0.39,0,0.6c-0.22-0.04-0.43-0.07-0.67-0.11c0.01,0.19,0.03,0.36,0.04,0.48c0.29,0.16,0.57,0.27,0.78,0.47
						c0.21,0.19,0.33,0.46,0.5,0.7c0.58-0.28,1.01-0.14,1.29,0.47c0.04-0.02,0.09-0.04,0.14-0.05c0.23-0.08,0.48-0.01,0.6,0.2
						c0.06,0.11,0.13,0.11,0.24,0.11c0.34,0.01,0.68,0,1,0.07c0.89,0.21,1.17,1,1.09,1.68c-0.11,0.97-0.54,1.82-1.03,2.65
						c-0.1,0.17-0.21,0.34-0.32,0.51c-0.25,0.4-0.25,0.4-0.3,0.84C34.35,104.37,31.55,104.37,28.7,104.37z M34.26,99.07
						c-0.23,0.18-0.46,0.35-0.68,0.53c-0.03,0.03-0.05,0.09-0.05,0.13c0,0.19,0.03,0.38,0.03,0.57c0,0.56,0,1.12,0,1.71
						c0.3-0.16,0.6-0.21,0.92-0.1c0.32,0.11,0.52,0.35,0.67,0.68c0.08-0.27,0.17-0.51,0.23-0.76c0.13-0.53,0.27-1.07,0.36-1.61
						c0.06-0.36-0.01-0.73-0.24-1.05C34.94,99.49,34.71,99.47,34.26,99.07z M32.35,102.27c0-0.67,0-1.31,0-1.95
						c0-0.2,0.02-0.4,0.02-0.6c0-0.04-0.03-0.09-0.07-0.12c-0.19-0.14-0.38-0.28-0.58-0.42c-0.46,0.31-0.76,0.28-1.23-0.12
						c-0.24,0.25-0.34,0.56-0.35,0.9c-0.02,0.56,0.14,1.09,0.29,1.62c0.06,0.22,0.13,0.44,0.2,0.66
						C31.33,101.71,31.78,101.72,32.35,102.27z M29.49,98.85c-0.16,0.02-0.32,0.03-0.48,0.05c-0.78,0.12-1.17,0.61-1.13,1.4
						c0.04,0.79,0.3,1.52,0.54,2.31c0.13-0.33,0.32-0.55,0.61-0.67c0.3-0.13,0.59-0.09,0.84,0.01c-0.14-0.48-0.29-0.97-0.44-1.47
						c-0.12-0.4-0.08-0.8,0.08-1.18C29.59,99.14,29.63,99.01,29.49,98.85z M36.03,101.95c0.65-0.24,1.03-0.09,1.5,0.63
						c0.16-0.62,0.31-1.21,0.45-1.8c0.05-0.21,0.06-0.44,0.05-0.65c-0.05-0.83-0.61-1.3-1.46-1.26c-0.04,0.07-0.06,0.15-0.12,0.2
						c-0.09,0.08-0.08,0.15-0.04,0.26c0.14,0.35,0.19,0.71,0.09,1.08C36.34,100.93,36.18,101.45,36.03,101.95z"
                />
                <path
                  fill="#C69C6D"
                  d="M28.73,105.22c0-0.18,0-0.36,0-0.55c2.81,0,5.61,0,8.43,0c0,0.18,0,0.36,0,0.55
						C34.35,105.22,31.55,105.22,28.73,105.22z"
                />
              </g>
              <g id="icon_extraction">
                <path
                  fill="#C69C6D"
                  d="M89.85,85.29c1.58-0.05,2.98,0.71,4.27,1.54c0.81,0.46,0.71-0.39,1.52,0.58
						c0.37,0.26,0.51,0.59,0.36,1.04c-0.03,0.08,0.03,0.22,0.09,0.31c0.93,1.31,1.62,2.77,1.6,4.43c-0.91-1.06-1.82-2-2.79-2.98
						c-0.39-0.28-0.94,0.25-1.33-0.05c-0.7-0.68-1.01-0.73-0.7-1.77c0.04-0.15-0.01-0.24-0.12-0.34
						C91.79,87.12,90.83,86.21,89.85,85.29z"
                />
                <path
                  fill="#C69C6D"
                  d="M87.61,96.38c-0.33-0.33-0.68-0.68-1.01-1.01c1.86-1.86,3.74-3.74,5.61-5.61
						c0.32,0.32,0.67,0.67,1.01,1.01C91.36,92.63,89.48,94.51,87.61,96.38z"
                />
                <path
                  fill="#C69C6D"
                  d="M96.58,87.37c-0.31-0.31-0.66-0.66-1-1.01c0.23-0.22,0.47-0.45,0.7-0.68c0.33,0.33,0.67,0.68,1,1
						C97.06,86.91,96.82,87.14,96.58,87.37z"
                />
              </g>
              <g id="icon_independence">
                <path
                  fill="#C69C6D"
                  d="M51.8,114.15c0.56-0.36,1.14-0.53,1.77-0.51c0.71,0.02,1.33,0.26,1.85,0.74c0.78,0.72,1.67,0.9,2.67,0.6
						c0.09-0.03,0.19-0.07,0.27-0.11c0.44-0.21,0.65-0.08,0.65,0.42c0,0.45,0,0.89,0,1.34c0,0.86-0.01,1.72,0,2.58
						c0,0.26-0.09,0.42-0.33,0.55c-1.01,0.55-2.46,0.54-3.44-0.4c-0.97-0.93-2.34-0.92-3.39-0.17c-0.06,0.04-0.08,0.17-0.08,0.26
						c0,1.45,0,2.9,0,4.35c0,0.09,0,0.18-0.01,0.27c-0.04,0.31-0.28,0.52-0.57,0.51c-0.29-0.01-0.52-0.24-0.54-0.55
						c0-0.04,0-0.08,0-0.12c0-3.26,0-6.53,0.01-9.79c0-0.19,0.09-0.42,0.22-0.54c0.31-0.29,0.79-0.09,0.88,0.33
						C51.78,113.98,51.79,114.04,51.8,114.15z"
                />
              </g>
              <g id="icon_government">
                <g>
                  <path
                    fill="#C69C6D"
                    d="M116.72,104.98c0,0.4,0,0.68,0,1.01c-3.09,0-6.16,0-9.27,0c0-0.33,0-0.66,0-1.01
							C110.55,104.98,113.62,104.98,116.72,104.98z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M107.76,98.83c5.3-2.54,3.33-2.57,8.63,0C113.45,98.83,110.69,98.83,107.76,98.83z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M108.23,104.39c-0.29,0-0.5,0-0.77,0c0-1.26,0-2.5,0-3.81c0.23,0,0.48,0,0.77,0
							C108.23,101.83,108.23,103.07,108.23,104.39z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M112.47,104.37c-0.27,0-0.5,0-0.78,0c0-1.25,0-2.5,0-3.79c0.25,0,0.49,0,0.78,0
							C112.47,101.84,112.47,103.09,112.47,104.37z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M116.71,100.57c0,1.27,0,2.52,0,3.8c-0.27,0-0.5,0-0.78,0c0-1.26,0-2.5,0-3.8
							C116.18,100.57,116.42,100.57,116.71,100.57z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M109.65,104.37c-0.27,0-0.5,0-0.77,0c0-1.28,0-2.52,0-3.81c0.27,0,0.5,0,0.77,0
							C109.65,101.84,109.65,103.09,109.65,104.37z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M111.04,104.37c-0.27,0-0.5,0-0.77,0c0-1.28,0-2.53,0-3.81c0.27,0,0.5,0,0.77,0
							C111.04,101.84,111.04,103.09,111.04,104.37z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M113.88,104.38c-0.29,0-0.5,0-0.76,0c0-1.27,0-2.52,0-3.81c0.25,0,0.48,0,0.76,0
							C113.88,101.82,113.88,103.07,113.88,104.38z"
                  />
                  <path
                    fill="#C69C6D"
                    d="M114.5,104.41c0-1.33,0-2.55,0-3.84c0.25-0.02,0.48,0.02,0.77,0c0,1.29,0,2.48,0,3.79
							C115.04,104.38,114.81,104.39,114.5,104.41z"
                  />
                </g>
                <rect
                  x="107.45"
                  y="99.37"
                  fill="#C69C6D"
                  width="9.27"
                  height="0.65"
                />
              </g>
              <g id="icon_locked">
                <path
                  fill="#C69C6D"
                  d="M49.49,88.57c0-0.45,0-0.87,0-1.3c0.01-1.1,0.64-2.02,1.65-2.43c1.51-0.62,3.25,0.34,3.53,1.95
						c0.04,0.21,0.04,0.42,0.05,0.63c0.01,0.37,0,0.75,0,1.16c0.11,0,0.22,0,0.32,0c0.57,0.02,0.98,0.41,0.98,0.98
						c0.01,1.52,0.01,3.05,0,4.57c0,0.57-0.41,0.98-0.98,0.98c-1.96,0.01-3.92,0.01-5.88,0c-0.57,0-0.97-0.41-0.98-0.98
						c-0.01-1.52-0.01-3.05,0-4.57c0-0.56,0.42-0.95,0.98-0.98C49.27,88.57,49.37,88.57,49.49,88.57z M50.39,88.55
						c1.16,0,2.29,0,3.44,0c0-0.5,0.02-0.98,0-1.46c-0.05-0.87-0.78-1.54-1.67-1.56c-0.89-0.02-1.67,0.61-1.75,1.47
						C50.35,87.51,50.39,88.03,50.39,88.55z"
                />
              </g>
              <g id="icon_country">
                <path
                  fill="#C69C6D"
                  d="M81.76,124l-0.05-0.88l1.11-0.28c0.04-0.05,0.06-0.2,0.07-0.45s0.02-0.58,0.04-0.98s0.02-0.83,0.02-1.3
						v-2.55c0-0.49-0.01-0.93-0.02-1.33s-0.02-0.71-0.04-0.97s-0.04-0.4-0.07-0.45l-1.11-0.26l0.05-0.88h4.73l0.07,0.88l-1.13,0.26
						c-0.02,0.06-0.04,0.22-0.06,0.47s-0.03,0.58-0.04,0.97s-0.02,0.82-0.02,1.3v2.55c0,0.47,0.01,0.89,0.02,1.27s0.03,0.7,0.04,0.96
						s0.04,0.42,0.06,0.49l1.13,0.28L86.48,124H81.76z"
                />
                <path
                  fill="#C69C6D"
                  d="M87.84,113.68h4.85c1.9,0,3.38,0.44,4.43,1.33s1.58,2.11,1.58,3.68c0,1.03-0.25,1.95-0.75,2.74
						s-1.19,1.42-2.07,1.88S94,124,92.85,124h-5.01l-0.07-0.88l1.13-0.28c0.04-0.07,0.06-0.36,0.09-0.88s0.04-1.13,0.04-1.85v-2.55
						c0-0.74-0.01-1.36-0.04-1.87s-0.05-0.8-0.09-0.87l-1.13-0.26L87.84,113.68z M91.42,114.84c0,0.08,0,0.24-0.01,0.47
						s-0.01,0.53-0.02,0.91s-0.01,0.83-0.01,1.35v2.55c0,0.3,0,0.62,0.01,0.96s0.02,0.64,0.04,0.93s0.04,0.51,0.05,0.68
						c0.25,0.05,0.51,0.08,0.78,0.11s0.53,0.04,0.76,0.04c0.98,0,1.73-0.29,2.24-0.86s0.76-1.48,0.76-2.71
						c0-0.83-0.09-1.54-0.28-2.11s-0.45-1.04-0.77-1.39s-0.7-0.61-1.13-0.77s-0.87-0.25-1.34-0.25c-0.18,0-0.36,0.01-0.54,0.02
						S91.61,114.8,91.42,114.84z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default FaceWoman;