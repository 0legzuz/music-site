import React from 'react';
import * as S from '../styles/SignPagesStyles';

export default function SignUp() {
  return (
    <S.LoginWrapper>
      <S.EnterContainer>
        <S.LoginBlock>
          <S.LoginForm>
            <S.LoginInputMail type="text" name="login" placeholder="Почта" />
            <S.LoginInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.LoginInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.SignupButtonRegister>
              <a href="#">Зарегистрироваться</a>
            </S.SignupButtonRegister>
          </S.LoginForm>
        </S.LoginBlock>
      </S.EnterContainer>
    </S.LoginWrapper>
  );
}
