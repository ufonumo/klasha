import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import dashboard from '../assets/dashboard.svg';
import wallet from '../assets/Wallet.svg';
import customer from '../assets/customer.svg';
import activity from '../assets/Activity.svg';
import star from '../assets/Star.svg';
import logout from '../assets/Logout.svg';
import filter from '../assets/Filter.svg';
import call from '../assets/Call.svg';


export const mainListItems = (
        <>
        <ListSubheader className="mainText" inset>Main pages</ListSubheader>
        <ListItem button active>
            <ListItemIcon>
                <img src={dashboard} alt="dashboard" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={wallet} alt="wallet" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Balances" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
             <img src={activity} alt="activity" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Analytics" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={customer} alt="customer" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Customers" />
        </ListItem>

    </>
  );

  export const secondaryListItems = (
    <div>
        <ListSubheader className="mainText" inset>General</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <img src={filter} alt="filter" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Settings" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={star} alt="star" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Team" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={call} alt="call" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Contact" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={logout} alt="logout" />
            </ListItemIcon>
            <ListItemText className="list_item_text" primary="Logout" />
        </ListItem>
    </div>
  );
