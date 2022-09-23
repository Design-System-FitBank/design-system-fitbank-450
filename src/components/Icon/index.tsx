import React from 'react'
import { Home } from './icons/Home'
<<<<<<< HEAD
import { Adress } from './icons/Adress'
import { ArrowDown } from './icons/ArrowDown'
import { ArroyLeft } from './icons/ArroyLeft'
import { ArrowRight } from './icons/ArrowRight'
import { ArrowUp } from './icons/ArrowUp'
import { Authorization } from './icons/Authorization'
import { Calendar } from './icons/Calendar'
import { Cancel } from './icons/Cancel'
import { Card } from './icons/Card'
import { CardMulti } from './icons/CardMulti'
import { ChangeAccount } from './icons/ChangeAccount'
import { Cnh } from './icons/Cnh'
import { Detail } from './icons/Detail'
import { Device } from './icons/Device'
import { Done } from './icons/Done'
import { Download } from './icons/Download'
import { Edit } from './icons/Edit'
import { Email } from './icons/Email'
import { Enterprise } from './icons/Enterprise'
import { Favorite } from './icons/Favorite'
import { FavoriteAdd } from './icons/FavoriteAdd'
import { FavoriteRemove } from './icons/FavoriteRemove'
import { Filter } from './icons/Filter'
import { Pin } from './icons/Pin'
import { Code } from './icons/Code'
import { Link } from './icons/Link'
import { Money } from './icons/Money'
import { MoneyIn } from './icons/MoneyIn'
import { MoneyNote } from './icons/MoneyNote'
import { MoneyOut } from './icons/MoneyOut'
import { MoneyTransfer } from './icons/MoneyTranfer'
import { MoneyTransferSMS } from './icons/MoneyTransferSMS'
import { OnboardingCard } from './icons/OnboardingCard'
import { OnboardingSMS } from './icons/OnboardingSMS'
import { Options } from './icons/Options'
import { Payment } from './icons/Payment'
import { Pix } from './icons/Pix'
import { Plus } from './icons/Plus'
import { QrCode } from './icons/QrCode'
import { QrCodeIn } from './icons/QrCodeIn'
import { Receipt } from './icons/Receipt'
import { Refresh } from './icons/Refresh'
import { Rg } from './icons/Rg'
import { Scheduled } from './icons/Scheduled'
import { SelectAll } from './icons/SelectAll'
import { SendMoney } from './icons/SendMoney'
import { Setup } from './icons/Setup'
import { Share } from './icons/Share'
import { TicketPayment } from './icons/TicketPayment'
import { ToggleOff } from './icons/ToggleOff'
import { ToggleOn } from './icons/ToggleOn'
import { TopUp } from './icons/TopUp'
import { Trash } from './icons/Trash'
import { Upload } from './icons/Upload'
import { User } from './icons/User'
import { UserBank } from './icons/UserBank'
import { UserGroup } from './icons/UserGroup'
import { UserSearch } from './icons/UserSearch'
import { WithdrawMoney } from './icons/WithdrawMoney'
import { Xlsx } from './icons/Xlsx'
=======
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06

interface IconsProps {
  name:
    | 'adress'
    | 'arrowDown'
    | 'arrowLeft'
    | 'arrowRight'
    | 'arrowUp'
    | 'authorization'
    | 'calendar'
    | 'cancel'
    | 'card'
    | 'cardMulti'
    | 'changeAccount'
<<<<<<< HEAD
    | 'code'
    | 'cnh'
    | 'details'
    | 'device'
=======
    | 'cnh'
    | 'details'
    | 'Device'
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
    | 'done'
    | 'download'
    | 'edit'
    | 'email'
    | 'enterprise'
    | 'favorite'
    | 'favoriteAdd'
    | 'favoriteRemove'
    | 'filter'
<<<<<<< HEAD
=======
    | 'Frame 202'
    | 'Frame 203'
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
    | 'home'
    | 'link'
    | 'money'
    | 'moneyln'
<<<<<<< HEAD
    | 'moneyNote'
=======
    | 'moneyNotes'
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
    | 'moneyOut'
    | 'moneyTransfer'
    | 'moneyTransferSMS'
    | 'onboardingCard'
    | 'onboardingSMS'
    | 'options'
    | 'payment'
    | 'pin'
    | 'pix'
    | 'plus'
    | 'qrCode'
    | 'qrCodeIn'
    | 'qrCodeOut'
    | 'receipt'
    | 'refresh'
    | 'rg'
    | 'scheduled'
<<<<<<< HEAD
    | 'selectAll'
=======
    | 'select-all'
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
    | 'sendMoney'
    | 'setup'
    | 'share'
    | 'ticketPayment'
    | 'toggleOff'
    | 'toggleOn'
    | 'topup'
    | 'trash'
    | 'upload'
    | 'user'
    | 'userBank'
    | 'userGroup'
    | 'userSearch'
    | 'withdrawMoney'
<<<<<<< HEAD
    | 'xlsx'
=======
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
}

export const Icon: React.FC<IconsProps> = ({ name }) => {
  switch (name) {
    case 'home':
      return <Home data-testid='home' />

<<<<<<< HEAD
    case 'adress':
      return <Adress data-testid='adress' />

    case 'arrowDown':
      return <ArrowDown data-testid='arrowDown' />

    case 'arrowLeft':
      return <ArroyLeft data-testid='arrowLeft' />

    case 'arrowRight':
      return <ArrowRight data-testid='arrowRight' />

    case 'arrowUp':
      return <ArrowUp data-testid='arrowUp' />

    case 'authorization':
      return <Authorization data-testid='authorization' />

    case 'calendar':
      return <Calendar data-testid='calendar' />

    case 'cancel':
      return <Cancel data-testid='cancel' />

    case 'card':
      return <Card data-testid='card' />

    case 'cardMulti':
      return <CardMulti data-testid='cardMulti' />

    case 'changeAccount':
      return <ChangeAccount data-testid='changeAccount' />

    case 'code':
      return <Code data-testid='code' />

    case 'cnh':
      return <Cnh data-testid='cnh' />

    case 'details':
      return <Detail data-testid='details' />

    case 'device':
      return <Device data-testId='device' />

    case 'done':
      return <Done data-testid='done' />

    case 'download':
      return <Download data-testid='download' />

    case 'edit':
      return <Edit data-testid='edit' />

    case 'email':
      return <Email data-testid='email' />

    case 'enterprise':
      return <Enterprise data-testid='enterprise' />

    case 'favorite':
      return <Favorite data-testid='favorite' />

    case 'favoriteAdd':
      return <FavoriteAdd data-testid='favoriteAdd' />

    case 'favoriteRemove':
      return <FavoriteRemove data-testid='favoriteRemove' />

    case 'filter':
      return <Filter data-testid='filter' />

    case 'pin':
      return <Pin data-testid='pin' />

    case 'link':
      return <Link data-testid='link' />

    case 'money':
      return <Money data-testid='money' />

    case 'moneyln':
      return <MoneyIn data-testid='moneyln' />

    case 'moneyNote':
      return <MoneyNote data-testid='moneyNote' />

    case 'moneyOut':
      return <MoneyOut data-testId='moneyOut' />

    case 'moneyTransfer':
      return <MoneyTransfer data-testid='moneyTransfer' />

    case 'moneyTransferSMS':
      return <MoneyTransferSMS data-testid='moneyTransferSMS' />

    case 'onboardingCard':
      return <OnboardingCard data-testid='onboardingCard' />

    case 'onboardingSMS':
      return <OnboardingSMS data-testid='onboardingSMS' />

    case 'options':
      return <Options data-testid='options' />

    case 'payment':
      return <Payment data-testid='payment' />

    case 'pix':
      return <Pix data-testid='pix' />

    case 'plus':
      return <Plus data-testid='plus' />

    case 'qrCode':
      return <QrCode data-testid='qrCode' />

    case 'qrCodeIn':
      return <QrCodeIn data-testid='qrCodeIn' />

    case 'receipt':
      return <Receipt data-testid='receipt' />

    case 'refresh':
      return <Refresh data-testid='refresh' />

    case 'rg':
      return <Rg data-testid='rg' />

    case 'scheduled':
      return <Scheduled data-testid='scheduled' />

    case 'selectAll':
      return <SelectAll data-testid='selectAll' />

    case 'sendMoney':
      return <SendMoney data-testid='sendMoney' />

    case 'setup':
      return <Setup data-testid='setup' />

    case 'share':
      return <Share data-testid='share' />

    case 'ticketPayment':
      return <TicketPayment data-testid='ticketPayment' />

    case 'toggleOff':
      return <ToggleOff data-testid='toggleOff' />

    case 'toggleOn':
      return <ToggleOn data-testid='toggleOn' />

    case 'topup':
      return <TopUp data-testid='topup' />

    case 'trash':
      return <Trash data-testid='trash' />

    case 'upload':
      return <Upload data-testid='upload' />

    case 'user':
      return <User data-testid='user' />

    case 'userBank':
      return <UserBank data-testid='userBank' />

    case 'userGroup':
      return <UserGroup data-testid='userGroup' />

    case 'userSearch':
      return <UserSearch data-testid='userSearch' />

    case 'withdrawMoney':
      return <WithdrawMoney data-testid='withdrawMoney' />

    case 'xlsx':
      return <Xlsx data-testid='xlsx' />

    default:
      return <div>icon not found!</div>
=======
    default:
      return <div />
>>>>>>> 23b7fcc465477e28dbaec829e7969b17c5ec0d06
  }
}
