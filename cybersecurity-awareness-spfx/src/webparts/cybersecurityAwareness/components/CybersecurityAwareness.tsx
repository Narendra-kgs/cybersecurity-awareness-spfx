import * as React from 'react';
import styles from './CybersecurityAwareness.module.scss';
import { ICybersecurityAwarenessProps } from './ICybersecurityAwarenessProps';

const weeks = [
  { n:'1', date:'Thu Oct 1', label:'Kickoff and Week 1', title:'Phishing in every channel' },
  { n:'2', date:'Thu Oct 8', label:'Week 2', title:'Leader impersonation' },
  { n:'3', date:'Thu Oct 15', label:'Week 3', title:'Payment and logistics fraud' },
  { n:'4', date:'Thu Oct 22', label:'Week 4', title:'AI-powered scams and threats' },
  { n:'✓', date:'Thu Oct 29', label:'Wrap-up', title:'Recap and Spot the Scam answers' }
];
const metrics = [
  ['Identify','17','third-party security reviews'], ['Protect','10.7M','malicious and unwanted emails blocked'],
  ['Detect','18 min','average time to spot a threat'], ['Respond','1,286','security cases resolved'], ['Recover','570','servers covered by backups']
];
const themes = [
  {week:'Week 1 · Oct 1–7',state:'Live now',title:'Phishing in every channel',tag:'Think before you click, scan or tap',work:'QR-code lures, fake IT help desk calls, and messages from compromised trusted accounts',home:'Toll, parcel and bank texts',action:'Report it, even if you already clicked.'},
  {week:'Week 2 · Oct 8–14',state:'Opens Oct 8',title:'Leader impersonation',tag:'Urgent + secret = verify first',work:'WhatsApp or text messages from a leader about a confidential deal or payment',home:'Family emergency calls using cloned voices',action:'Verify using a known number.'},
  {week:'Week 3 · Oct 15–21',state:'Opens Oct 15',title:'Payment and logistics fraud',tag:'Follow the money and the freight',work:'Rush orders, new bank details, look-alike addresses and fake carriers',home:'Fake invoices and missed-delivery texts',action:'Confirm unusual requests through a known contact.'},
  {week:'Week 4 · Oct 22–31',state:'Opens Oct 22',title:'AI-powered scams and threats',tag:'Flawless fakes, faster attacks',work:'AI-written lures, deepfake calls and unapproved AI tools',home:'Voice clones and deepfake investment ads',action:'Use approved AI tools and keep devices updated.'}
];
const workTips = ['Pause on anything urgent or secret.','Check the full sender address, not only the display name.','Treat QR codes in emails like links.','Approve an MFA prompt only when you initiated the sign-in.','Never share your password or MFA code.','Confirm unusual orders, pickups and bank changes by phone.','Use only approved AI tools.','Restart when updates prompt.'];
const homeTips = ['Open official apps instead of tapping links in toll, parcel or bank texts.','Agree on a family code word for emergency calls.','Use a password manager and unique passwords.','Turn on multifactor authentication.','Keep phones, computers and routers updated.','Be skeptical of investment ads with famous faces.','Check before paying invoices or delivery fees.','Share these tips with family.'];
const attacks = [
  ['KGS · March 2026','The QR code that looked like an internal message','A phishing email opened a fake sign-in page. The response team removed the message, reset affected passwords and contained the incident.','Treat QR codes like links and report sign-in requests.'],
  ['Companies like ours · 2026','“Senior leaders” on WhatsApp','Criminals used messages and AI-generated calls to imitate executives and request confidential payments.','Urgent plus secret means verify first.'],
  ['KGS · Winter 2025–26','The “updated” bank details','A look-alike address entered an invoice conversation and supplied fraudulent bank details.','Confirm payment-detail changes using a known phone number.'],
  ['KGS · Summer 2026','The “customer” who wasn’t','Spoofed messages and calls requested a large rush pickup using convincing order details.','Correct details do not prove identity.'],
  ['KGS · August 2026','A real supplier, a hacked mailbox','Messages from a known supplier account were identified as a likely compromise and quarantined.','Verify unexpected requests even from known senders.']
];

const CybersecurityAwareness: React.FC<ICybersecurityAwarenessProps> = () => {
  const [showFlags,setShowFlags] = React.useState(false);
  const nav = [['this-week','This week'],['defenses','Our defenses'],['themes','Themes'],['protect','Protect yourself'],['attacks','Real attacks'],['involved','Get involved'],['resources','Resources'],['report','Report it']];
  return <div className={styles.app}>
    <a className={styles.skip} href="#main">Skip to content</a>
    <header className={styles.header}>
      <div className={styles.brand}><span className={styles.shield}>◆</span><div><small>Digital Technology · Cybersecurity</small><strong>Cybersecurity Awareness Month 2026</strong></div></div>
      <nav>{nav.map(x=><a key={x[0]} href={'#'+x[0]}>{x[1]}</a>)}</nav>
    </header>
    <main id="main">
      <section className={styles.hero}>
        <div className={styles.heroContent}><span className={styles.eyebrow}>Cybersecurity Awareness Month · October 2026</span><h1>Don’t Make It Easy for Them</h1><p>Four weeks. Four real threats. Simple habits that protect you at work and at home.</p><p className={styles.lead}>Criminals use convincing emails, texts, QR codes, phone calls and AI-generated fakes. Every Thursday, learn what to watch for and one action you can take.</p><div className={styles.actions}><a className={styles.primary} href="#report">Report something suspicious</a><a className={styles.secondary} href="#this-week">Try this week’s Spot the Scam</a></div></div>
        <div className={styles.heroArt} aria-hidden="true"><div className={styles.target}>!</div><span>STOP · CHECK · REPORT</span></div>
      </section>
      <section className={styles.notice}><strong>Week 1 is live:</strong> Phishing in every channel</section>
      <section className={styles.section}><div className={styles.sectionHead}><span>October at a glance</span><h2>A new theme every Thursday</h2><p>Each theme stays open all month, so you can catch up any time.</p></div><div className={styles.timeline}>{weeks.map(w=><article key={w.n}><b>{w.n}</b><div><small>{w.date}</small><strong>{w.label}</strong><span>{w.title}</span></div></article>)}</div></section>
      <section id="this-week" className={`${styles.section} ${styles.alt}`}><div className={styles.sectionHead}><span>This week · Oct 1–7</span><h2>Phishing in every channel</h2><p>Phishing is not just email. Lures now arrive by text, QR code and phone, including callers pretending to be the IT help desk.</p></div><div className={styles.resourceGrid}>{['Proofpoint video · Week 1','Proofpoint tip sheet','Proofpoint poster','KGS Connect article'].map((x,i)=><div className={styles.placeholder} key={x}><span>{i===3?'KGS Connect':'Proofpoint'}</span><strong>{x}</strong><small>{i===0?'Two to three minutes, with captions':'Content link to be added'}</small></div>)}</div><div className={styles.actionBar}>Your one action this week: report anything suspicious, even if you already clicked.</div>
        <div className={styles.scam}><div><span className={styles.eyebrow}>Spot the Scam · Week 1</span><h3>Can you find the red flags?</h3><div className={styles.email}><b>From:</b> KGS Internal Communications &lt;updates@kgs-intranet-news.com&gt;<br/><b>Subject:</b> Action required: re-verify your account by 5:00 PM today<hr/><p>Scan the QR code with your phone and sign in. Accounts not verified by 5:00 PM will be locked.</p><div className={styles.qr}>▦</div></div><button onClick={()=>setShowFlags(!showFlags)}>{showFlags?'Hide the red flags':'Reveal the red flags'}</button></div>{showFlags&&<ul className={styles.flags}><li>The sender uses a look-alike address.</li><li>The message creates urgency.</li><li>The QR code hides the destination.</li><li>It asks for credentials.</li><li>The message is generic and unexpected.</li></ul>}</div>
      </section>
      <section id="defenses" className={styles.dark}><div className={styles.sectionHead}><span>How we protect KGS</span><h2>Your Cybersecurity team, by the numbers</h2><p>January through June 2026 activity shown for mockup review.</p></div><div className={styles.metrics}>{metrics.map(m=><article key={m[0]}><span>{m[0]}</span><b>{m[1]}</b><p>{m[2]}</p></article>)}</div><div className={styles.incident}><div><span>Contained · March 2026</span><h3>One phishing email, shut down fast</h3><p>A fake internal QR-code message led colleagues to a false sign-in page. The response was underway quickly, affected credentials were reset and the attack spread no further.</p></div><div><b>5.6%</b><p>phishing susceptibility rate in the first half of 2026</p></div></div></section>
      <section id="themes" className={styles.section}><div className={styles.sectionHead}><span>Four weeks, four real threats</span><h2>This month’s themes</h2></div><div className={styles.themeGrid}>{themes.map(t=><article className={styles.theme} key={t.title}><div className={styles.themeTop}><small>{t.week}</small><span>{t.state}</span></div><h3>{t.title}</h3><strong>{t.tag}</strong><dl><dt>At work</dt><dd>{t.work}</dd><dt>At home</dt><dd>{t.home}</dd><dt>Do this</dt><dd>{t.action}</dd></dl><div className={styles.chips}><span>Video</span><span>Poster</span><span>Tip sheet</span><span>Interactive</span></div></article>)}</div></section>
      <section id="protect" className={`${styles.section} ${styles.alt}`}><div className={styles.sectionHead}><span>Protect yourself</span><h2>Simple habits for work and home</h2></div><div className={styles.tips}><article><h3>At work</h3><ul>{workTips.map(x=><li key={x}>{x}</li>)}</ul></article><article><h3>At home</h3><ul>{homeTips.map(x=><li key={x}>{x}</li>)}</ul></article></div></section>
      <section id="attacks" className={styles.section}><div className={styles.sectionHead}><span>Real attacks, real lessons</span><h2>It happens here too</h2></div><div className={styles.attackGrid}>{attacks.map(a=><article key={a[1]}><small>{a[0]}</small><h3>{a[1]}</h3><p>{a[2]}</p><strong>Lesson: {a[3]}</strong></article>)}</div></section>
      <section id="involved" className={`${styles.section} ${styles.alt}`}><div className={styles.sectionHead}><span>Get involved</span><h2>More than one email</h2></div><div className={styles.involve}>{[['Spot the Scam','Weekly','A new example lure every Thursday.'],['“Good catch” shout-outs','Proposed','Recognition for colleagues who report phishing.'],['For people leaders','Proposed','A two-minute talking point for team huddles.'],['At our plants','Languages TBC','Break-room screens linking to tips in local languages.']].map(x=><article key={x[0]}><span>{x[1]}</span><h3>{x[0]}</h3><p>{x[2]}</p></article>)}</div></section>
      <section id="report" className={styles.report}><div><span>See something? Say something</span><h2>How to report it</h2><p>Reporting quickly is the most useful thing you can do. A false alarm is better than a missed attack.</p></div><ol><li><b>Stop</b><span>Do not click, reply, scan or call back.</span></li><li><b>Report it</b><span>Use your approved security reporting channel.</span></li><li><b>Already clicked?</b><span>Report it right away. Speed limits the damage.</span></li></ol><a href="mailto:security@kgsolutions.com">Email security@kgsolutions.com</a></section>
      <section id="resources" className={styles.section}><div className={styles.sectionHead}><span>Resources</span><h2>Learn more</h2></div><div className={styles.resources}>{['Proofpoint security awareness library','KGS AI policy','Cybersecurity Theme of the Month','National Cybersecurity Alliance','CISA Cybersecurity Awareness Month resources','MyKGS Help'].map((r,i)=><a key={r} href={i<3?'#resources':'#'}><span>{i<3?'Link to come':'Resource'}</span><strong>{r}</strong><small>Videos, guidance and supporting material</small></a>)}</div></section>
    </main>
    <footer>KGS Cybersecurity · Digital Technology · Questions? security@kgsolutions.com <span>Mockup for review · September 2026</span></footer>
  </div>;
};
export default CybersecurityAwareness;
