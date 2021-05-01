import React, { useState } from 'react';
import clsx from 'clsx';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import MarkunreadIcon from '@material-ui/icons/Markunread';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import DeleteIcon from '@material-ui/icons/Delete';

export default function LeftMenu({ classes }) {
  const [items] = useState([
    {
      name: 'Unread',
      updated: '2 minutes ago',
      Icon: MarkunreadIcon,
      notifications: 1
    },
    {
      name: 'High Priority',
      updated: '30 minutes ago',
      Icon: PriorityHighIcon
    },
    {
      name: 'Low Priority',
      updated: '3 hours ago',
      Icon: LowPriorityIcon
    },
    { name: 'Junk', updated: '6 days ago', Icon: DeleteIcon }
  ]);

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <ListItem button key={index}>
          <ListItemIcon>
            <Avatar>
              <Icon />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            secondary={item.updated}
          />
        </ListItem>
      ))}
    </List>

  );
}