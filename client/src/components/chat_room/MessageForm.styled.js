import styled from 'styled-components';

export const MessageFormContainer = styled.div.attrs({
   className: 'btn-cancel-edit',
})`
   display: flex;
   flex-direction: column;
   align-content: center;
   width: 100%;
   padding: 0.6rem 0.6rem 1rem 0.6rem;
   gap: 0.2rem;
   button {
      background-color: transparent;
   }
   .btn-cancel-edit {
      align-self: flex-start;
      background-color: ${props => props.theme.informational};
      border: 0.2rem solid hsl(0, 0%, 30%);
      padding: 0.3rem 0.9rem;
      border-radius: 0.4rem;
      margin-left: 3.3rem;
      font-size: 0.9rem;
      font-family: 'Roboto';
      letter-spacing: 0.5px;
      transition: background-color 0.2s linear, scale 0.1s linear;
      &:hover {
         background-color: ${props => props.theme.informationalHover};
      }
      &:active {
         scale: 0.96;
      }
   }
`;

export const StyledMessageForm = styled.form.attrs({
   className: 'btn-picker, picker-wrapper',
})`
   display: flex;
   position: relative;
   width: 100%;
   align-items: center;

   textarea {
      font-family: 'Open Sans', sans-serif;
      width: 100%;
      resize: none;
      border-radius: 0.8rem;
      line-height: 1.2;
      border: none;
      padding: 0.3rem 0.6rem;
      font-size: 0.95rem;
      min-height: 2rem;
      outline: none;
      margin: 0 0.8rem 0 0.6rem;
      outline: 1px solid transparent;
      color: ${props => props.theme.font};
      background-color: ${props => props.theme.form};
      transition: all 0.2s linear;
      &:focus {
         background-color: ${props => props.theme.formHover};
         outline-color: #949494;
      }
   }

   .btn-picker {
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      border-radius: 1rem;
      padding: 0.15rem;
      margin-bottom: 0.1rem;
      transition: background-color 0.2s linear;
      &:hover {
         background-color: ${props => props.theme.formHover};
      }
      p {
         padding-bottom: 0.1rem;
      }
   }
   .picker-wrapper {
      position: absolute;
      bottom: 2rem;
   }
`;

export const SendMessageBtn = styled.button`
   display: flex;
   font-weight: 600;
   font-size: 1.4rem;
   border-radius: 50%;
   border: none;
   cursor: pointer;
   color: #1db4f6;
   border-radius: 1rem;
   padding: 0.5rem;
   filter: drop-shadow(0px 0px 3px #1db4f6);
   transition: all 0.2s linear;
   &:hover {
      background-color: ${props => props.theme.formHover};
   }
   &:disabled {
      color: hsl(0, 0%, 24%);
      filter: drop-shadow(0 0);
      cursor: not-allowed;
   }
`;

export const EmojiPickerStyled = styled.div`
   position: absolute;
   bottom: 2rem;
`;
