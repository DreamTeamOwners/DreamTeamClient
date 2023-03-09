import { FunctionComponent } from 'react';
import { Button, Input } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './CreateTeam.module.css';

const CreateTeam: FunctionComponent = () => {
  return (
    <div className={styles.createTeam}>
      <div className={styles.createTeamChild} />

      <div className={styles.dreamTeam}>Dream team</div>
      <div className={styles.div}>Список команды</div>
      <div className={styles.div1}>Добавить участников</div>
      <div className={styles.div2}>Пока нет участников</div>
      <img className={styles.vectorIcon} alt="" src="../vector-2.svg" />
      <div className={styles.div3}>+</div>
      <div className={styles.div4}>Название команда</div>
      <div className={styles.div5}>Описание</div>
      <div className={styles.div6}>Ссылки</div>
      <div className={styles.div7}>Владелец</div>
      <div className={styles.div8}>Опыт</div>

      <div className={styles.div9}>
        Команда стремится создать платформу, которая поможет людям объединяться в команды и успешно
        работать вместе на рынке.
      </div>
      <div className={styles.hhhtpchetaChetaTam}>hhhtp//cheta cheta tam</div>
      <div className={styles.div10}>Аида</div>
      <div className={styles.juniormidle}>Junior/midle</div>
      <div className={styles.dreamTeam1}>Dream team</div>
    </div>
  );
};

export default CreateTeam;
