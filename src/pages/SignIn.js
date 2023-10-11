import React from 'react';
import * as S from '../styles/SignPages';

export default function SignIn() {
  return (
    <S.LoginWrapper>
      <S.EnterContainer>
        <S.LoginBlock>
          <S.LoginForm>
            <S.LoginInputMail
              type="text"
              name="mail"
              placeholder="Почта"
            />
            <S.LoginInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.LoginButton type="submit">
              <a href="#">Войти</a>
            </S.LoginButton>
            <S.SignupButton>
              <a href="#">Зарегистрироваться</a>
            </S.SignupButton>
          </S.LoginForm>
        </S.LoginBlock>
      </S.EnterContainer>
    </S.LoginWrapper>
  );
}
