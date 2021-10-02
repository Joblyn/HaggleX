import { ReactComponent as More } from "../../Assets/Icons/more.svg";
import { ReactComponent as Otc } from "../../Assets/Icons/otc.svg";
import { ReactComponent as Savings } from "../../Assets/Icons/savings.svg";
import { ReactComponent as Support } from "../../Assets/Icons/support.svg";
import { ReactComponent as Wallets } from "../../Assets/Icons/wallet.svg";
import { MdDashboard } from "react-icons/md";

const navItems = [
  {
    Icon: MdDashboard,
    name: "Dashboard",
    path: '/dashboard',
  },
  {
    Icon: Wallets,
    name: "Wallet",
    path: '/wallet',
  },
  {
    Icon: Otc,
    name: "Otc",
    path: '/wallet',
  },
  {
    Icon: Savings,
    name: "Savings",
    path: '/wallet',
  },
  {
    Icon: More,
    name: "More",
    path: '/wallet',
  },
  {
    Icon: Support,
    name: "Support",
    path: '/wallet',
  }
];

export default navItems;
