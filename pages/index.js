import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizContainer from '../src/components/QuizContainer/index';
import QuizLogo from '../src/components/QuizLogo/index';
import Input from '../src/components/Input/index';
import Button from '../src/components/Button/index';

export default function Home() {
  const router = useRouter();

  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>

          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('opa');
              // router manda  pra proxima pagina
            }}
            >
              <Input
                name="nomeUser"
                value={name}
                onChange={(value) => {
                  setName(value.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar  ${name}`}
              </Button>
            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lorem ipsum dolor</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
