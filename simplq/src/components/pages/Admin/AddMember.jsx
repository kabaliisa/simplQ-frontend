import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import SidePanelItem from 'components/common/SidePanel/SidePanelItem';
import styles from './admin.module.scss';
import JoinQueueForm from '../Join/Form';

export default (props) => {
  return (
    <SidePanelItem
      Icon={AddIcon}
      title="Add Member"
      description="Add a person to this queue manually"
      expandable
      tourTag="reactour__addMember"
    >
      <div className={styles['admin-join-queue-form']}>
        <JoinQueueForm
          buttonText="Add To Queue"
          queueId={props.queueId}
          joinQueueHandler={props.joinQueueHandler}
        />
      </div>
    </SidePanelItem>
  );
};
