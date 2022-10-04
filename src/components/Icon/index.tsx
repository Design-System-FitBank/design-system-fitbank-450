import React from 'react'
import { Home } from './icons/Home'
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
import { QrCodeOut } from './icons/QrCodeOut'
import { EyeClose } from './icons/EyeClose'
import { EyeOpen } from './icons/EyeOpen'

interface IconsProps {
  /**
   * Variavel para alterar altura.
   * Caso não seja alterada o valor será de 32px.
   */
  height?: number
  /**
   * Variavel para alterar largura.
   * Caso não seja alterada o valor será de 32px.
   */
  width?: number
  /**
   * Variavel de nomes de cada ícone.
   */
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
    | 'code'
    | 'cnh'
    | 'details'
    | 'device'
    | 'done'
    | 'download'
    | 'edit'
    | 'email'
    | 'enterprise'
    | 'eyeClose'
    | 'favorite'
    | 'favoriteAdd'
    | 'favoriteRemove'
    | 'filter'
    | 'home'
    | 'link'
    | 'money'
    | 'moneyln'
    | 'moneyNote'
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
    | 'selectAll'
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
    | 'xlsx'
    | 'eyeOpen'
}

export const Icon: React.FC<IconsProps> = ({ name, height = 32, width = 32 }) => {
  switch (name) {
    case 'home':
      return <Home data-testid='home' width={width} height={height} />

    case 'adress':
      return <Adress data-testid='adress' width={width} height={height} />

    case 'arrowDown':
      return <ArrowDown data-testid='arrowDown' width={width} height={height} />

    case 'arrowLeft':
      return <ArroyLeft data-testid='arrowLeft' width={width} height={height} />

    case 'arrowRight':
      return <ArrowRight data-testid='arrowRight' width={width} height={height} />

    case 'arrowUp':
      return <ArrowUp data-testid='arrowUp' width={width} height={height} />

    case 'authorization':
      return <Authorization data-testid='authorization' width={width} height={height} />

    case 'calendar':
      return <Calendar data-testid='calendar' width={width} height={height} />

    case 'cancel':
      return <Cancel data-testid='cancel' width={width} height={height} />

    case 'card':
      return <Card data-testid='card' width={width} height={height} />

    case 'cardMulti':
      return <CardMulti data-testid='cardMulti' width={width} height={height} />

    case 'changeAccount':
      return <ChangeAccount data-testid='changeAccount' width={width} height={height} />

    case 'code':
      return <Code data-testid='code' width={width} height={height} />

    case 'cnh':
      return <Cnh data-testid='cnh' width={width} height={height} />

    case 'details':
      return <Detail data-testid='details' width={width} height={height} />

    case 'device':
      return <Device data-testId='device' width={width} height={height} />

    case 'done':
      return <Done data-testid='done' width={width} height={height} />

    case 'download':
      return <Download data-testid='download' width={width} height={height} />

    case 'edit':
      return <Edit data-testid='edit' width={width} height={height} />

    case 'email':
      return <Email data-testid='email' width={width} height={height} />

    case 'enterprise':
      return <Enterprise data-testid='enterprise' width={width} height={height} />

    case 'favorite':
      return <Favorite data-testid='favorite' width={width} height={height} />

    case 'favoriteAdd':
      return <FavoriteAdd data-testid='favoriteAdd' width={width} height={height} />

    case 'favoriteRemove':
      return <FavoriteRemove data-testid='favoriteRemove' width={width} height={height} />

    case 'filter':
      return <Filter data-testid='filter' width={width} height={height} />

    case 'pin':
      return <Pin data-testid='pin' width={width} height={height} />

    case 'link':
      return <Link data-testid='link' width={width} height={height} />

    case 'money':
      return <Money data-testid='money' width={width} height={height} />

    case 'moneyln':
      return <MoneyIn data-testid='moneyln' width={width} height={height} />

    case 'moneyNote':
      return <MoneyNote data-testid='moneyNote' width={width} height={height} />

    case 'moneyOut':
      return <MoneyOut data-testId='moneyOut' width={width} height={height} />

    case 'moneyTransfer':
      return <MoneyTransfer data-testid='moneyTransfer' width={width} height={height} />

    case 'moneyTransferSMS':
      return <MoneyTransferSMS data-testid='moneyTransferSMS' width={width} height={height} />

    case 'onboardingCard':
      return <OnboardingCard data-testid='onboardingCard' width={width} height={height} />

    case 'onboardingSMS':
      return <OnboardingSMS data-testid='onboardingSMS' width={width} height={height} />

    case 'options':
      return <Options data-testid='options' width={width} height={height} />

    case 'payment':
      return <Payment data-testid='payment' width={width} height={height} />

    case 'pix':
      return <Pix data-testid='pix' width={width} height={height} />

    case 'plus':
      return <Plus data-testid='plus' width={width} height={height} />

    case 'qrCode':
      return <QrCode data-testid='qrCode' width={width} height={height} />

    case 'qrCodeIn':
      return <QrCodeIn data-testid='qrCodeIn' width={width} height={height} />

    case 'qrCodeOut':
      return <QrCodeOut data-testid='qrCodeOut' width={width} height={height} />

    case 'receipt':
      return <Receipt data-testid='receipt' width={width} height={height} />

    case 'refresh':
      return <Refresh data-testid='refresh' width={width} height={height} />

    case 'rg':
      return <Rg data-testid='rg' width={width} height={height} />

    case 'scheduled':
      return <Scheduled data-testid='scheduled' width={width} height={height} />

    case 'selectAll':
      return <SelectAll data-testid='selectAll' width={width} height={height} />

    case 'sendMoney':
      return <SendMoney data-testid='sendMoney' width={width} height={height} />

    case 'setup':
      return <Setup data-testid='setup' width={width} height={height} />

    case 'share':
      return <Share data-testid='share' width={width} height={height} />

    case 'ticketPayment':
      return <TicketPayment data-testid='ticketPayment' width={width} height={height} />

    case 'toggleOff':
      return <ToggleOff data-testid='toggleOff' width={width} height={height} />

    case 'toggleOn':
      return <ToggleOn data-testid='toggleOn' width={width} height={height} />

    case 'topup':
      return <TopUp data-testid='topup' width={width} height={height} />

    case 'trash':
      return <Trash data-testid='trash' width={width} height={height} />

    case 'upload':
      return <Upload data-testid='upload' width={width} height={height} />

    case 'user':
      return <User data-testid='user' width={width} height={height} />

    case 'userBank':
      return <UserBank data-testid='userBank' width={width} height={height} />

    case 'userGroup':
      return <UserGroup data-testid='userGroup' width={width} height={height} />

    case 'userSearch':
      return <UserSearch data-testid='userSearch' width={width} height={height} />

    case 'withdrawMoney':
      return <WithdrawMoney data-testid='withdrawMoney' width={width} height={height} />

    case 'xlsx':
      return <Xlsx data-testid='xlsx' width={width} height={height} />

    case 'eyeClose':
      return <EyeClose data-testid='eyeClose' width={width} height={height} />

    case 'eyeOpen':
      return <EyeOpen data-testid='eyeOpen' width={width} height={height} />

    default:
      return <div>icon not found!</div>
  }
}
