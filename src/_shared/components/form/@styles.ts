import { styled } from "styled-components";

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 16px 16px;
  margin-bottom: 32px;
`;

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;
  /* min-height: 82vh; */
  z-index: 2;
`;

export const FormInModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 2;
  width: 100%;
  /* min-height: 500px; */
  /* max-height: 80vh; */
`;
