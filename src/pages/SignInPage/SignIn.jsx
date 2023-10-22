import React from 'react';
import * as S from '../../styles/SignPagesStyles';

export default function SignIn() {
  return (
    <S.LoginWrapper>
      <S.EnterContainer>
        <S.LoginBlock>
          <S.LoginForm>
            <S.LoginInputMail type="text" name="mail" placeholder="Почта" />
            <S.LoginInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.LoginButton type="submit">
              <S.SignInLink to="/">Войти</S.SignInLink>
            </S.LoginButton>
            <S.SignupButton>
              <S.SignUpLink to="/signup">Зарегистрироваться</S.SignUpLink>
            </S.SignupButton>
          </S.LoginForm>
        </S.LoginBlock>
      </S.EnterContainer>
    </S.LoginWrapper>
  );
}
