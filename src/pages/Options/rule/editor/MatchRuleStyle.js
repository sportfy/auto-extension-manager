import { styled } from "styled-components"

const Style = styled.div`
  .match-method {
    display: flex;
    align-items: center;

    margin-left: 20px;
    font-size: 14px;

    .match-method-title {
      margin-right: 2px;
    }

    .match-method-label {
      margin-left: 20px;
    }
  }

  .scene-match-mode-container {
    margin: 10px 0;
  }

  .host-match-mode-container {
    margin: 10px 0;
    max-width: 800px;

    & > * {
      margin-bottom: 3px;
    }

    & > *:last-child {
      margin-top: 10px;
    }
  }
`

export default Style
