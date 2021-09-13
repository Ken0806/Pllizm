import { VFC } from 'react'

import { Box, Container } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { HelpContentItemTitle } from '../../atoms/index'
import { HelpContentTitleContainer } from '../../molecules/index'
import { Footer, HeaderWithTitleAndReturnArrow } from '../../organisms/index'

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      paddingTop: '32px',
      paddingBottom: '32px',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('sm')]: {
        paddingTop: '24px',
        paddingBottom: '24px',
      },
    },
    container: {
      maxWidth: '810px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '330px',
      },
    },
    h1: {
      fontSize: '30px',
      marginBottom: '8px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
        marginBottom: '8px',
      },
    },
    h2: {
      fontSize: '22px',
      marginBottom: '8px',
    },
    p: {
      fontSize: '16px',
      marginLeft: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        marginLeft: '8px',
      },
    },
    ol: {
      listStyleType: 'decimal',
      listStylePosition: 'inside',
      marginLeft: '24px',
      marginBottom: '8px',
      fontSize: '16px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '8px',
        fontSize: '12px',
      },
    },
    li: {
      marginBottom: '8px',
    },
  }),
)

const PrivacyPolicy: VFC = () => {
  const classes = useStyles()

  return (
    <>
      <header>
        <HeaderWithTitleAndReturnArrow title="プライバシーポリシー" />
      </header>
      <main className={classes.main}>
        <Container className={classes.container}>
          <HelpContentTitleContainer
            title="プライバシーポリシー"
            description="中村謙一（以下，「当サービス提供者」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。"
          />
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第1条（個人情報）" />
            <p className={classes.p}>
              「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第2条（個人情報の収集方法）" />
            <p className={classes.p}>
              当サービス提供者は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当サービス提供者の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
            </p>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第3条（個人情報を収集・利用する目的）" />
            <p className={classes.p}>当サービス提供者が個人情報を収集・利用する目的は，以下のとおりです。</p>
            <ol className={classes.ol}>
              <li className={classes.li}>当サービス提供者サービスの提供・運営のため</li>
              <li className={classes.li}>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
              <li className={classes.li}>
                ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当サービス提供者が提供する他のサービスの案内のメールを送付するため
              </li>
              <li className={classes.li}>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
              <li className={classes.li}>
                利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
              </li>
              <li className={classes.li}>
                ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
              </li>
              <li className={classes.li}>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
              <li className={classes.li}>上記の利用目的に付随する目的</li>
            </ol>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle
              itemTitle="第4条（利用目的の変更）
"
            />
            <ol className={classes.ol}>
              <li className={classes.li}>
                当サービス提供者は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
              </li>
              <li className={classes.li}>
                利用目的の変更を行った場合には，変更後の目的について，当サービス提供者所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
              </li>
            </ol>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第5条（個人情報の第三者提供）" />
            <ol className={classes.ol}>
              <li className={classes.li}>
                当サービス提供者は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
              </li>
              <ol className={classes.ol}>
                <li className={classes.li}>
                  人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき
                </li>
                <li className={classes.li}>
                  公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき
                </li>
                <li className={classes.li}>
                  国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                </li>
                <li className={classes.li}>
                  予め次の事項を告知あるいは公表し，かつ当サービス提供者が個人情報保護委員会に届出をしたとき
                </li>
                <ol className={classes.ol}>
                  <li className={classes.li}>利用目的に第三者への提供を含むこと</li>
                  <li className={classes.li}>第三者に提供されるデータの項目</li>
                  <li className={classes.li}>第三者への提供の手段または方法</li>
                  <li className={classes.li}>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                  <li className={classes.li}>本人の求めを受け付ける方法</li>
                </ol>
              </ol>
              <li className={classes.li}>
                前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。
              </li>
              <ol className={classes.ol}>
                <li className={classes.li}>
                  当サービス提供者が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
                </li>
                <li className={classes.li}>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                <li className={classes.li}>
                  個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合
                </li>
              </ol>
            </ol>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第6条（個人情報の開示）" />
            <ol className={classes.ol}>
              <li className={classes.li}>
                当サービス提供者は，本人から個人情報の開示を求められたときは，本人に対し，これを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を通知します。なお，個人情報の開示に際しては，手数料を申し受ける場合があります。
                <ol className={classes.ol}>
                  <li className={classes.li}>
                    本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
                  </li>
                  <li className={classes.li}>当サービス提供者の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li className={classes.li}>その他法令に違反することとなる場合</li>
                </ol>
              </li>
              <li className={classes.li}>
                前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。
              </li>
            </ol>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第7条（個人情報の訂正および削除）" />
            <ol className={classes.ol}>
              <li className={classes.li}>
                ユーザーは，当サービス提供者の保有する自己の個人情報が誤った情報である場合には，当サービス提供者が定める手続きにより，当サービス提供者に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。
              </li>
              <li className={classes.li}>
                当サービス提供者は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，当該個人情報の訂正等を行うものとします。
              </li>
              <li className={classes.li}>
                当サービス提供者は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは，これをユーザーに通知します。
              </li>
            </ol>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第8条（個人情報の利用停止等）" />
            <ol className={classes.ol}>
              <li className={classes.li}>
                当サービス提供者は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，必要な調査を行います。
              </li>
              <li className={classes.li}>
                前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，当該個人情報の利用停止等を行います。
              </li>
              <li className={classes.li}>
                当サービス提供者は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，これをユーザーに通知します。
              </li>
            </ol>
          </Box>
          <Box mb={3}>
            <HelpContentItemTitle itemTitle="第9条（プライバシーポリシーの変更）" />
            <ol className={classes.ol}>
              <li className={classes.li}>
                本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
              </li>
              <li className={classes.li}>
                当サービス提供者が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
              </li>
            </ol>
          </Box>
          <Box mb={3} textAlign="right">
            <p className={classes.p}>以上</p>
          </Box>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default PrivacyPolicy
