import type { LegalDocument, LegalDocumentId } from './types';

/**
 * English legal texts.
 *
 * These mirror the Turkish set in `tr.ts`. Turkish is the governing language for the
 * Turkish market; the English version exists so non-Turkish readers can understand the
 * same commitments. When the two differ in a Turkish-law dispute, the Turkish text
 * prevails, and every document says so.
 *
 * Keep the two files in sync. A change made in one and forgotten in the other is worse
 * than no translation at all: it promises different things to different readers.
 */

const EFFECTIVE = '22 August 2026';

const TR_PREVAILS =
  'This is a translation provided for convenience. In matters governed by Turkish law, the Turkish version of this document prevails.';

export const legalDocumentsEN: Record<LegalDocumentId, LegalDocument> = {
  privacy: {
    id: 'privacy',
    slug: '/privacy',
    title: 'Privacy Policy',
    summary: 'A plain-language account of why and how we process your data. Formal detail lives in the Data Protection Notice.',
    effectiveDate: EFFECTIVE,
    related: ['kvkk', 'consent', 'account-deletion'],
    required: true,
    intro: [
      { kind: 'callout', value: 'This page explains how we treat your privacy in everyday language. For legal and technical detail, see the **Data Protection Notice**. If the two conflict, the Notice governs.' },
      { kind: 'text', value: 'Veterito brings pet owners, veterinarians and clinics together. It keeps your animal\'s health history, lets you book appointments, and gathers adoption listings and posts from other pet lovers.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'The short version',
        blocks: [{ kind: 'list', items: [
          '**We do not sell your data.** No transfers to ad networks, no advertising identifiers.',
          '**Your animal\'s health record is yours.** You decide who sees it; by default that is only you.',
          '**Data not collected is the safest data.** The app contains no analytics, no session recording and no location tracking.',
        ]}],
      },
      {
        number: '2', title: 'What we collect',
        blocks: [
          { kind: 'text', value: 'In short: what you provide when you create an account, what you enter for your animal, and the records created as you use the platform. The itemised list is in **Data Protection Notice §2**.' },
          { kind: 'text', value: 'Health information you enter belongs to your **animal**, not to you as a person. We protect it with the same care regardless.' },
        ],
      },
      {
        number: '3', title: 'Who sees what',
        blocks: [
          { kind: 'table', columns: ['Content', 'Who can see it'], rows: [
            ['Animal health records (vaccines, medication, weight, diagnoses)', 'Only you, unless you open them to a clinic'],
            ['Animal profile', 'Other users if you set it public; otherwise only you'],
            ['Posts and comments', 'According to the visibility you choose; followers only if your account is private'],
            ['Display name, username and profile photo', 'Visible in search and on your profile'],
            ['Messages', 'Only the person you are writing to'],
            ['Appointments and clinic notes', 'You and the authorised staff of the clinic you booked'],
            ['Phone, date of birth, email address', 'Only you. Never shown to other users'],
          ]},
          { kind: 'callout', value: 'These boundaries are not a matter of interface courtesy: access rules are enforced **row by row on the server**. Data hidden on screen is not returned by the server either.' },
        ],
      },
      {
        number: '4', title: 'Messaging and unwanted contact',
        blocks: [
          { kind: 'text', value: 'When someone who does not follow you and has no clinical relationship with you writes to you, their message does not land in your inbox. It waits in **Message Requests**, and until you accept, that person can send **only one message**.' },
          { kind: 'list', items: [
            'If you delete the request, that person can never write to you again.',
            'Reading a pending request is **not** revealed to the sender.',
            'A veterinarian at a clinic where you have an appointment or a customer record is exempt, so that a message about your animal is not lost in a request folder.',
          ]},
        ],
      },
      {
        number: '5', title: 'Who we share data with',
        blocks: [{ kind: 'text', value: 'Only with the infrastructure providers that run the service, under contract and for limited purposes. The full list and their locations are in **Data Protection Notice §4**. We do not sell or share data with advertising networks.' }],
      },
      {
        number: '6', title: 'Security',
        blocks: [
          { kind: 'text', value: 'We apply encryption in transit and at rest, row-level access control, login records and the principle of least privilege. Photos and videos you upload are not held at a public address: a **short-lived signed URL** is generated for each viewing.' },
          { kind: 'text', value: 'We do not publish the details of our security configuration. The reason is to avoid widening the attack surface.' },
        ],
      },
      {
        number: '7', title: 'Retention and deletion',
        blocks: [{ kind: 'text', value: 'Your data is kept while your account is open. You can delete your account from inside the app; deletion is **immediate**, there is no waiting period, and it **cannot be undone**. See the **Account Deletion** page for the steps.' }],
      },
      {
        number: '8', title: 'Children',
        blocks: [{ kind: 'text', value: 'Veterito is not directed at children and is closed to anyone **under 13**. See the **Child Safety** page for detail.' }],
      },
      {
        number: '9', title: 'Your rights and contact',
        blocks: [{ kind: 'text', value: 'You may exercise your rights of access, rectification, erasure, portability and objection from inside the app or by writing to `info@veterito.com`. Legal basis and timeframes are in **Data Protection Notice §7**.' }],
      },
      {
        number: '10', title: 'Changes',
        blocks: [{ kind: 'text', value: 'If we update this policy we change the effective date, and for significant changes we notify you inside the app.' }],
      },
    ],
  },

  kvkk: {
    id: 'kvkk',
    slug: '/kvkk',
    title: 'Data Protection Notice',
    summary: 'The formal notice under Turkish data protection law: what data, for what purpose, on what legal basis, transferred where, kept how long.',
    effectiveDate: EFFECTIVE,
    related: ['privacy', 'consent', 'account-deletion'],
    required: true,
    intro: [
      { kind: 'callout', value: 'This is an information notice under **Article 10** of Turkish Law No. 6698 on the Protection of Personal Data (**KVKK**). It informs you; it does not ask for consent. Processing that requires consent is handled separately in the **Consent Statement**, because a notice and a consent must not be bundled into one document.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'Data controller',
        blocks: [
          { kind: 'text', value: 'Veterito is a digital platform. The controller of personal data processed through it is the **operator** of the platform.' },
          { kind: 'list', items: ['**Controller / operator:** `Veterito`', '**Data protection contact:** `info@veterito.com`'] },
        ],
      },
      {
        number: '2', title: 'Personal data we process',
        blocks: [
          { kind: 'table', columns: ['Category', 'Data', 'Source'], rows: [
            ['Identity', 'First name, last name, username', 'You'],
            ['Contact', 'Email address; phone number (optional)', 'You'],
            ['Profile', 'Profile photo, province/district, date of birth (optional), animal species you follow, account privacy setting', 'You'],
            ['Animal details', 'Name, species, breed, sex, date of birth, neuter status, description, photos and videos, microchip and passport number', 'You'],
            ['Animal health record', 'Vaccinations, medication, parasite treatments, weight measurements, medical procedures, veterinary visits, diagnoses and notes, chronic conditions, feeding notes, prescriptions', 'You or a clinic you authorise'],
            ['Appointments', 'Clinic, service, date and time, your note and the clinic\'s note', 'You and the clinic'],
            ['Social interaction', 'Posts, comments, likes, bookmarks, follow relationships, blocks, reports, content views', 'Your usage'],
            ['Messaging', 'Message content, attached media, read status, message request state', 'Your usage'],
            ['Adoption', 'Listing content and your applications (message, contact phone)', 'You'],
            ['Clinic data (veterinarian role only)', 'Clinic details, team members, customer records, name/phone/email for customers who do not use the app, income and expense records', 'The clinic'],
            ['Transaction security', 'Login IP address, device model, operating system and version, app version, platform', 'Automatic'],
            ['Notifications', 'Device notification token, platform, device model, app version; your notification preferences', 'Automatic and your preference'],
          ]},
          { kind: 'text', value: '**Login records (limited, security purpose):** Your login IP address and device details are stored only in login security records. They are capped at the **most recent 10 logins** per user and a maximum of **180 days**, after which they are deleted automatically. We do not process this information for marketing or analytics.' },
          { kind: 'callout', value: '**What we do not process (data minimisation):** We use **no** advertising identifier, **no** GPS location tracking, **no** analytics measurement, **no** session recording, **no** cookie-based ad tracking, **no** third-party ad network and **no** fingerprinting. The application contains no library serving any of these purposes.' },
        ],
      },
      {
        number: '3', title: 'Device permissions',
        blocks: [
          { kind: 'text', value: 'The app asks only for the permissions below, and only for the feature you are using. If you decline, the rest of the app keeps working.' },
          { kind: 'table', columns: ['Permission', 'Used for', 'Required'], rows: [
            ['Photos', 'Choosing a profile or animal photo, attaching images to posts and messages', 'No'],
            ['Camera', 'Doing the same with a live capture', 'No'],
            ['Microphone', 'Recording sound while capturing video', 'No'],
            ['Calendar', 'Adding your appointment to your device calendar', 'No'],
            ['Notifications', 'Appointment, vaccination reminder and message notifications', 'No'],
          ]},
          { kind: 'text', value: 'We do not request location permission. Distance shown in the clinic directory is based on the address the clinic itself declares and the province and district you select. Your device location is never read.' },
        ],
      },
      {
        number: '4', title: 'Transfers',
        blocks: [
          { kind: 'text', value: 'We work under contract with the following **processors** in order to deliver the service.' },
          { kind: 'table', columns: ['Processor', 'Purpose', 'Location'], rows: [
            ['Supabase', 'Database, authentication, server functions', '**EU, Frankfurt / Germany**'],
            ['Cloudflare R2 and CDN', 'Storage and delivery of images, video and documents', 'Global edge network'],
            ['Resend', 'Transactional email (verification, password reset, account notices)', '**EU, Ireland**'],
            ['Expo (Expo Application Services)', 'Delivery of push notifications to the device', 'United States'],
            ['Apple Push Notification service', 'Notification delivery to iOS devices', 'United States / global'],
            ['Google Firebase Cloud Messaging', 'Notification delivery to Android devices', 'United States'],
            ['Sign in with Apple', 'Authentication with your Apple account, only if you use it', 'United States / global'],
            ['Google Sign-In', 'Authentication with your Google account, only if you use it', 'United States'],
            ['Apple App Store / Google Play', 'Distribution and updating of the app', 'United States / global'],
          ]},
          { kind: 'text', value: '**Transfers abroad (Article 9):** Your account, animal records, messages and uploaded files are processed on **European Union** infrastructure (Germany, Ireland). For notification delivery, your **device notification token** is transferred to US-based notification infrastructure; that token alone does not identify you and is used solely to deliver the notification. Apple and Google sign-in are engaged only if **you choose** that route. These transfers rely on the safeguards contemplated by Article 9.' },
          { kind: 'callout', value: '**Sharing with clinics:** When you book an appointment or accept being added to a clinic\'s customer list, your name and the relevant animal\'s health record become visible to that clinic\'s authorised staff. This is not a transfer to a third party; it is the service itself, and you initiate it. You can end the relationship from inside the app.' },
        ],
      },
      {
        number: '5', title: 'Purposes and legal bases (Article 5)',
        blocks: [
          { kind: 'text', value: '**a) Performance of a contract (Art. 5/2-c).** The service you requested by signing up:' },
          { kind: 'list', items: [
            'Creating an account and managing your profile',
            'Keeping an animal profile and health record',
            'Appointment request, proposal and confirmation flow',
            'Clinic page, team and customer management (veterinarian role)',
            'Messaging, posting and adoption listings',
          ]},
          { kind: 'text', value: '**b) Legitimate interest (Art. 5/2-f):**' },
          { kind: 'list', items: [
            'Platform security, abuse and spam prevention',
            'Login security records, limited in number and duration',
            'Handling reports and moderation',
          ]},
          { kind: 'text', value: '**c) Explicit consent (Art. 5/1-a).** Only the optional processing listed in the **Consent Statement**. These are **off by default** and can be withdrawn at any time.' },
          { kind: 'text', value: '**d) Legal obligation (Art. 5/2-ç):** Records that legislation requires us to keep.' },
        ],
      },
      {
        number: '6', title: 'Retention periods',
        blocks: [
          { kind: 'table', columns: ['Data', 'Period'], rows: [
            ['Active account data', 'While the account is open'],
            ['Account deletion', 'Processed **immediately**: profile, animal records, posts, messages and uploaded files are irreversibly deleted. There is **no** waiting or recovery window'],
            ['Login security records', 'The most recent **10 logins** per user and a maximum of **180 days**, then automatic destruction'],
            ['Patient records kept by a clinic', 'For as long as the clinic\'s obligations under veterinary legislation require. The controller of those records is the clinic'],
            ['Reports and moderation records', 'Until the review is complete and the legal objection period has passed'],
          ]},
          { kind: 'callout', value: '**Clinic records are a separate matter.** Deleting your account removes the records you entered. An examination record a clinic wrote into its own patient file may remain under that clinic\'s statutory obligations, and you would need to approach the clinic for those.' },
        ],
      },
      {
        number: '7', title: 'Your rights (Article 11)',
        blocks: [
          { kind: 'text', value: 'You have the right to learn whether your data is processed, to request information, to learn whether it is used for its purpose, to know the recipients, to request **rectification**, **erasure or destruction**, **portability**, to **object to processing**, and to complain to the supervisory authority.' },
          { kind: 'text', value: '**Response time:** Account deletion performed inside the app is **immediate**, with no waiting. For requests sent by email the statutory maximum is 30 days; our aim is to resolve them well before that.' },
        ],
      },
      {
        number: '8', title: 'Children\'s data',
        blocks: [{ kind: 'text', value: 'Veterito is not directed at children **under 13** and does not knowingly collect data from them. If an account belonging to someone under 13 is identified, it is closed and its data deleted. See **Child Safety**.' }],
      },
      {
        number: '9', title: 'Contact and complaints',
        blocks: [{ kind: 'list', items: [
          '**Requests:** `info@veterito.com`',
          'If your request is not resolved, you may complain to the Turkish Personal Data Protection Authority.',
        ]}],
      },
    ],
  },

  consent: {
    id: 'consent',
    slug: '/consent',
    title: 'Consent Statement',
    summary: 'For optional processing only. None of it is a condition of service; all of it is off by default and can be withdrawn.',
    effectiveDate: EFFECTIVE,
    related: ['kvkk', 'privacy'],
    required: true,
    intro: [
      { kind: 'callout', value: 'This statement covers **optional** processing only. You can use Veterito fully without agreeing to any of it: your account, animal records, appointments and messaging all keep working.' },
      { kind: 'text', value: 'Mandatory processing rests on **performance of a contract** and **legitimate interest**, not on consent. We do not ask for consent there, and consent obtained that way would be invalid in any case, because consent made a condition of service is not freely given.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'Processing that requires your consent',
        blocks: [
          { kind: 'table', columns: ['Processing', 'What it means', 'Default'], rows: [
            ['Push notifications', 'Delivering appointment, vaccination reminder, message and social notifications to your device. Your device notification token is processed for this', '**Off.** Nothing is sent unless you grant the device permission'],
            ['Email reminders', 'Sending vaccination and appointment reminders by email as well', '**Off**'],
            ['Being added to a clinic customer list', 'Allowing a clinic you booked to add you as a customer and keep your animal\'s record', '**Off.** An invitation arrives and you approve it'],
            ['Public animal profile', 'Making your animal\'s profile visible to other users', '**Off**'],
            ['Mating listing', 'Listing your animal as open to mating', '**Off**'],
            ['Sharing the health record with a clinic', 'Letting a clinic you choose see your animal\'s health history', '**Off.** You enable it per animal'],
          ]},
          { kind: 'callout', value: 'There is no marketing, advertising or analytics on this list, because we do none of it. If that ever changes, a separate and new consent will be requested; it will not be quietly appended here.' },
        ],
      },
      {
        number: '2', title: 'Giving and withdrawing consent',
        blocks: [
          { kind: 'text', value: 'Each item is switched on and off from the relevant screen in the app. Withdrawing is as easy as giving, and takes a single tap.' },
          { kind: 'table', columns: ['Processing', 'Where'], rows: [
            ['Notifications and email reminders', 'Profile → Notification Preferences'],
            ['Clinic customer relationship', 'Profile → Notifications → the invitation'],
            ['Animal profile visibility', 'Animal profile → Edit → Visibility'],
            ['Mating listing', 'Animal profile → Edit → Open to mating'],
            ['Sharing the health record with a clinic', 'Animal profile → Edit → Health information visibility'],
          ]},
          { kind: 'text', value: 'Withdrawal takes effect **going forward**: processing carried out lawfully before withdrawal remains valid, and processing stops afterwards.' },
        ],
      },
      {
        number: '3', title: 'If you do not consent',
        blocks: [{ kind: 'list', items: [
          'You create an account, keep animal records, book appointments, message and post.',
          'Only the related optional feature stops working. If notifications are off, for example, a reminder does not reach your device; you see it when you open the app.',
          '**No feature is restricted because of this**, and you are not charged differently.',
        ]}],
      },
    ],
    closing: [{ kind: 'text', value: 'For questions about consent, write to `info@veterito.com`. The legal basis for each type of processing is set out in **Data Protection Notice §5**.' }],
  },

  terms: {
    id: 'terms',
    slug: '/terms',
    title: 'Terms of Use',
    summary: 'The rules for using the platform, and the limits of rights and responsibilities.',
    effectiveDate: EFFECTIVE,
    related: ['privacy', 'service-agreement', 'child-safety'],
    required: true,
    intro: [
      { kind: 'callout', value: '**Veterito does not give medical advice.** Content and reminders in the app are informational and do not replace examination by a veterinarian. Make every decision about your animal\'s health with a veterinarian.' },
      { kind: 'text', value: 'By using Veterito you accept these terms. If you do not accept them, do not use the app; you may delete your account at any time.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'Your account',
        blocks: [{ kind: 'list', items: [
          'You must be **at least 13 years old** to create an account.',
          'You are responsible for the accuracy of the information you provide.',
          'Keeping your account secure is your responsibility. If you see a suspicious login, check **Profile → Login History** and change your password.',
          'You may not transfer or rent your account to anyone.',
        ]}],
      },
      {
        number: '2', title: 'Your content stays yours',
        blocks: [
          { kind: 'text', value: 'You keep the rights to the text, photos and video you upload. The permission you give us extends only as far as **running the service**: storing the content, showing it to the audience you chose, and processing it technically (resizing, caching).' },
          { kind: 'text', value: 'That permission ends when you delete the content or your account. We do not use your content in advertising and do not license it to third parties.' },
        ],
      },
      {
        number: '3', title: 'Prohibited conduct',
        blocks: [
          { kind: 'list', items: [
            'Sharing content that involves, depicts or encourages cruelty or violence towards animals.',
            'Presenting animal trade as adoption, or posting listings that **sell animals for money**.',
            'Impersonating others, or creating fake clinic or fake veterinarian profiles.',
            'Harassment, threats, hate speech, discrimination and persistent unwanted messaging.',
            'Spreading misleading medical claims, or recommending prescription medicines as a substitute for veterinary advice.',
            'Spam, bulk promotion, scraping, automated requests and reverse engineering.',
            'Sharing other people\'s personal data without permission.',
            'Attempting to circumvent security measures or to access another person\'s account.',
          ]},
          { kind: 'callout', value: '**Zero tolerance:** Child sexual abuse material and content depicting cruelty to animals are removed without waiting for a report, the account is permanently closed, and where required the authorities are notified.' },
        ],
      },
      {
        number: '4', title: 'Reporting and moderation',
        blocks: [
          { kind: 'text', value: 'Every post, comment, profile and conversation can be **reported** from inside the app, and you can **block** any user. A blocked person cannot write to you or find you.' },
          { kind: 'text', value: 'We review reports **within 24 hours**. Content may be removed or hidden, or an account suspended. You can appeal our decisions at `info@veterito.com`.' },
        ],
      },
      {
        number: '5', title: 'Veterinarians and clinics',
        blocks: [
          { kind: 'text', value: 'Opening a veterinarian role and a clinic page creates additional obligations, set out in the **Corporate Agreement**. A user who opens a clinic account is deemed to accept that agreement as well.' },
          { kind: 'text', value: '**Unverified** clinic accounts are visible on the platform but are labelled as such and cannot perform certain actions. Verification means the clinic\'s declaration has been checked by the platform; it is not a guarantee of quality or competence.' },
        ],
      },
      {
        number: '6', title: 'Appointments',
        blocks: [{ kind: 'text', value: 'Veterito relays an appointment **request**. The service relationship is formed between you and the clinic. Accepting, rescheduling, cancelling and delivering the service are the clinic\'s responsibility. The platform is not a party to that relationship.' }],
      },
      {
        number: '7', title: 'Adoption',
        blocks: [{ kind: 'text', value: 'Adoption listings are created by users. The platform does not verify the poster or the animal; meeting, handover and everything after it are between the parties. **Sale for money is prohibited** and such listings are removed.' }],
      },
      {
        number: '8', title: 'Continuity and changes',
        blocks: [{ kind: 'text', value: 'We may develop the service and add or remove features. Significant changes to your detriment are announced **in advance**. Interruptions may occur due to maintenance or technical failure; we do not promise uninterrupted access.' }],
      },
      {
        number: '9', title: 'Limits of liability',
        blocks: [{ kind: 'list', items: [
          'The platform is not liable for user-generated content or for damage arising from relationships between users.',
          'Decisions about your animal\'s health are your responsibility and your veterinarian\'s.',
          'These limits do **not** cover mandatory consumer protection provisions, nor cases of intent or gross negligence.',
        ]}],
      },
      {
        number: '10', title: 'Closing an account',
        blocks: [{ kind: 'text', value: 'You may delete your account at any time from inside the app (see **Account Deletion**). We may suspend or close an account for serious breach of these terms; before permanent closure we warn you and state the reason wherever possible.' }],
      },
      {
        number: '11', title: 'Governing law',
        blocks: [{ kind: 'text', value: 'These terms are governed by the laws of the Republic of Türkiye. Your rights as a consumer, including recourse to the competent consumer arbitration committee or court, are reserved.' }],
      },
    ],
  },

  'service-agreement': {
    id: 'service-agreement',
    slug: '/service-agreement',
    title: 'Corporate Agreement',
    summary: 'Additional terms for veterinarians, clinics and corporate accounts: verification, responsibility for patient data, team management.',
    effectiveDate: EFFECTIVE,
    related: ['terms', 'kvkk', 'privacy'],
    required: true,
    intro: [
      { kind: 'callout', value: 'This agreement binds **only users who open a clinic account or join a clinic team**. If you are an individual pet owner it does not concern you; the **Terms of Use** apply to you.' },
      { kind: 'text', value: 'When you open a clinic account you accept this agreement **in addition to** the Terms of Use. Where the two conflict, this agreement governs corporate use.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'Who may open a clinic account',
        blocks: [{ kind: 'list', items: [
          'Licensed veterinary clinics, polyclinics and animal hospitals operating in Türkiye in accordance with legislation.',
          'Persons authorised to act on behalf of those establishments.',
          'The person opening the account declares that they are authorised to represent the clinic. Accounts opened without authority are closed.',
        ]}],
      },
      {
        number: '2', title: 'Verification',
        blocks: [
          { kind: 'text', value: 'Clinics join the platform as **unverified**, and this is shown clearly to users. Verification requires the clinic\'s name, address and contact details.' },
          { kind: 'text', value: '**Verification is not a quality certificate.** It indicates that the information declared by the clinic has been checked to a reasonable extent; it carries no guarantee about the veterinary care provided. Verification can be withdrawn.' },
        ],
      },
      {
        number: '3', title: 'Patient data: who is responsible for what',
        blocks: [
          { kind: 'callout', value: 'This is the most important part of the agreement: it determines who is the **data controller** for which data.' },
          { kind: 'table', columns: ['Data', 'Controller', 'Platform role'], rows: [
            ['Records entered by the animal owner', 'The owner (their own data)', 'Hosting'],
            ['Examination, diagnosis and prescription records created by the clinic', '**The clinic**', 'Processor'],
            ['Offline customer details added by the clinic (name, phone, email)', '**The clinic**', 'Processor'],
            ['The clinic\'s income and expense records', '**The clinic**', 'Processor'],
            ['Clinic page, team and service information', '**The clinic**', 'Publication'],
          ]},
          { kind: 'text', value: 'When a clinic enters details of a customer who does not use the app, **informing that person and obtaining consent where required is the clinic\'s obligation.** The platform has no direct relationship with that person.' },
          { kind: 'text', value: 'The clinic is itself responsible for record-keeping and retention obligations arising from veterinary legislation. The platform hosts those records; tracking the periods is the clinic\'s task.' },
        ],
      },
      {
        number: '4', title: 'Team and permissions',
        blocks: [{ kind: 'list', items: [
          'The clinic owner may invite team members and set their permissions.',
          'The clinic is responsible for its team members\' conduct on the platform.',
          'Removing access for someone who leaves the team is the clinic\'s responsibility and must be done **immediately**.',
          'A clinic must always have at least one owner. A sole owner can neither leave the veterinarian role nor delete their account without transferring ownership.',
        ]}],
      },
      {
        number: '5', title: 'Clinic page and communication',
        blocks: [{ kind: 'list', items: [
          'The clinic is responsible for the accuracy of the information published on its page.',
          'Misleading treatment promises, guaranteed-outcome claims and advertising contrary to legislation are prohibited.',
          'A clinic may send announcements to its customers only within the scope of the service relationship. The announcement tool is **not a marketing list**; users can turn notifications off.',
          'User reviews may not be tampered with; inappropriate reviews are examined through the reporting process.',
        ]}],
      },
      {
        number: '6', title: 'Appointment obligations',
        blocks: [{ kind: 'text', value: 'The clinic undertakes to respond to appointment requests within a reasonable time. Accepting, proposing another time and cancelling are the clinic\'s responsibility. The service relationship is formed between the clinic and the animal owner; **the platform is not a party to it.**' }],
      },
      {
        number: '7', title: 'Plans and pricing',
        blocks: [
          { kind: 'callout', value: 'Clinic accounts are **entirely free** in this release, and no payment of any kind is taken inside the app. The rules below are the commitments that will apply if a paid plan is offered in future.' },
          { kind: 'text', value: 'Two plans are planned for clinic accounts: **Veterito Klinik**, covering the core features, and **Veterito Klinik Pro**, which adds team management, a web panel and enhanced visibility. When the plans launch, both will be **free for the first year**.' },
          { kind: 'text', value: 'If a paid period begins, we commit to the following:' },
          { kind: 'list', items: [
            'Notice is given **at least 30 days** before any charging starts.',
            'Features you used during the free period are not withdrawn during that period.',
            'If you choose not to move to a paid plan your account is not closed: it **returns to the free plan** and your data is not deleted. Only the features specific to the paid plan are disabled.',
            'Price changes are announced before they take effect; if you do not wish to continue, you may return to the free plan at the end of the term.',
          ]},
          { kind: 'text', value: '**No payment is taken inside the app.** When paid plans launch, payment will be handled through the corporate sales channel outside the app. The mobile app is not a purchasing tool.' },
          { kind: 'text', value: 'Nor does the platform intermediate payment between patient and clinic. Examination, treatment and service fees are entirely between the clinic and its customer.' },
        ],
      },
      {
        number: '8', title: 'Suspension and termination',
        blocks: [{ kind: 'list', items: [
          'A clinic may close its account at any time; a closed clinic\'s page is withdrawn from publication.',
          'Accounts may be suspended for activity contrary to legislation, misleading declarations, or conduct endangering user safety.',
          'Except in urgent cases, the clinic is informed before suspension and given time to remedy the issue.',
          'Even after closure, the clinic\'s statutory record-keeping obligations continue; it must export its data before closing.',
        ]}],
      },
      {
        number: '9', title: 'Governing law',
        blocks: [{ kind: 'text', value: 'This agreement is governed by the laws of the Republic of Türkiye. The courts and enforcement offices of the Republic of Türkiye have jurisdiction over disputes between the parties.' }],
      },
    ],
  },

  cookies: {
    id: 'cookies',
    slug: '/cookies',
    title: 'Cookie Notice',
    summary: 'Which cookies and similar technologies are used on the website and in the app.',
    effectiveDate: EFFECTIVE,
    related: ['privacy', 'kvkk'],
    required: true,
    intro: [
      { kind: 'callout', value: '**The mobile app uses no advertising or tracking cookies.** Neither does the website. This notice is short because there is little to report.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'On the website',
        blocks: [
          { kind: 'table', columns: ['Type', 'What it does', 'Consent needed'], rows: [
            ['Strictly necessary', 'Remembering settings such as your language and theme in your browser', 'No. Required for the service to work'],
            ['Performance / analytics', 'None', '**Not used**'],
            ['Advertising / targeting', 'None', '**Not used**'],
            ['Social media trackers', 'None', '**Not used**'],
          ]},
          { kind: 'text', value: 'Necessary values are kept in your browser\'s own storage (`localStorage`), are not sent to the server and are not linked to your identity. You can clear them from your browser settings; your preferences reset and the site keeps working.' },
        ],
      },
      {
        number: '2', title: 'In the mobile app',
        blocks: [
          { kind: 'text', value: 'The app uses no cookies. Instead, the following are kept on your device:' },
          { kind: 'list', items: [
            '**Session information.** Held in the device\'s secure storage so you do not sign in on every launch.',
            '**Your preferences.** Theme, language and interface choices.',
            '**Notification token.** Stored only if you granted notification permission.',
          ]},
          { kind: 'text', value: 'None of these is an advertising identifier and none is shared with third parties. Removing the app also removes these records from your device.' },
        ],
      },
      {
        number: '3', title: 'Third-party content',
        blocks: [{ kind: 'text', value: 'The site embeds no advertising, tracking pixels or social media buttons. When you follow a link to an app store, Apple\'s or Google\'s own rules apply.' }],
      },
      {
        number: '4', title: 'Changes',
        blocks: [{ kind: 'text', value: 'If we ever begin using a non-essential cookie, we will ask for your consent **before** it runs and update this notice.' }],
      },
    ],
  },

  'account-deletion': {
    id: 'account-deletion',
    slug: '/account-deletion',
    title: 'Account Deletion',
    summary: 'How to delete your account from inside the app, what is deleted and what remains. Deletion is immediate and irreversible.',
    effectiveDate: EFFECTIVE,
    related: ['privacy', 'kvkk', 'terms'],
    required: true,
    intro: [
      { kind: 'callout', value: 'You can delete your account **from inside the app**, without asking anyone and without filling in a request form. Deletion happens **immediately**; there is no waiting period and it **cannot be undone**.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'Deleting from the app (recommended)',
        blocks: [
          { kind: 'steps', items: [
            'Open the Veterito app and sign in to your account.',
            'Go to the **Profile** tab in the bottom menu.',
            'Scroll to the bottom of the page and tap **Delete Account**.',
            'Read what will be deleted in the dialog that opens.',
            'Type **ONAY** (or **CONFIRM**) in capital letters in the confirmation field.',
            'Tap **Delete Account**. Your session ends when the operation completes.',
          ]},
          { kind: 'text', value: 'We ask you to type the word for a simple reason: the operation cannot be undone, so it should not sit one tap away.' },
        ],
      },
      {
        number: '2', title: 'Closing only the veterinarian account',
        blocks: [
          { kind: 'text', value: 'If you want to stop practising on the platform but keep your personal account, **you do not have to delete everything**. There is a separate action:' },
          { kind: 'steps', items: [
            'Go to the Profile tab.',
            'Tap **Close veterinarian account**. This row appears only on accounts holding the veterinarian role.',
            'Confirm.',
          ]},
          { kind: 'text', value: 'This removes only your veterinarian role and clinic memberships. Your personal account, animals, posts and messages **remain**.' },
        ],
      },
      {
        number: '3', title: 'What is deleted',
        blocks: [{ kind: 'list', items: [
          'Your account and sign-in credentials',
          'Your profile: name, username, phone, date of birth, province and district, profile photo',
          'Your animals and all health records: vaccinations, medication, weight measurements, visits, diagnoses, feeding notes, identifiers',
          'Your posts, comments, likes and bookmarks',
          'Your messages and the media you sent',
          'Your adoption listings and applications',
          'Your appointment records',
          'Every photo, video and document you uploaded',
          'Your login security records and notification tokens',
        ]}],
      },
      {
        number: '4', title: 'What may remain, and why',
        blocks: [{ kind: 'table', columns: ['Remains', 'Reason'], rows: [
          ['Examination and prescription records a clinic wrote into its own patient file', 'The clinic\'s retention obligation under veterinary legislation. The clinic is the controller of those records, so deletion must be requested from the clinic'],
          ['Copies of messages others sent you, on their side', 'The other person\'s own conversation history. Your name and profile no longer appear'],
          ['Reports about you that are still under review', 'To allow moderation to complete and the legal objection period to pass'],
          ['Aggregate counts that cannot be linked to you', 'For example the total view count of a post. These records cannot be traced to a person'],
        ]}],
      },
      {
        number: '5', title: 'If deletion is blocked',
        blocks: [
          { kind: 'text', value: 'If you are the sole owner of an **open clinic**, deletion is refused and the clinic is named. The reason: nobody could add staff, close appointments or withdraw the page of a clinic left without an owner.' },
          { kind: 'text', value: 'Choose one of two routes:' },
          { kind: 'list', items: [
            '**Assign another owner** to the clinic: Profile → Veterinarian Panel → My Clinic → Team. Then try deletion again.',
            'To close the clinic entirely, write to `info@veterito.com` from the email address registered on your account. Once the clinic is closed you can delete your account.',
          ]},
        ],
      },
      {
        number: '6', title: 'If you cannot reach the app',
        blocks: [
          { kind: 'text', value: 'If you cannot access your phone or your account, write to `info@veterito.com` **from the email address registered on your account** with the subject "Account deletion request".' },
          { kind: 'text', value: 'The request must come from the registered address so that we can verify your identity. We resolve such requests within **30 days** at the latest; deleting from inside the app is always faster because it is immediate.' },
        ],
      },
      {
        number: '7', title: 'Before you delete',
        blocks: [{ kind: 'list', items: [
          'If you want to keep your animal\'s health history, export it or take screenshots **before** deleting. We cannot restore these records afterwards.',
          'If you hold a subscription bought through an app store (none exists in this release), it must be cancelled separately through the store.',
          'Deleting your account does not remove the app from your phone, and removing the app does not delete your account. They are two separate actions.',
        ]}],
      },
    ],
  },

  'child-safety': {
    id: 'child-safety',
    slug: '/child-safety',
    title: 'Child Safety Standards',
    summary: 'Age limit, zero-tolerance policy on child abuse material, and how to report.',
    effectiveDate: EFFECTIVE,
    related: ['terms', 'privacy'],
    required: false,
    intro: [
      { kind: 'callout', value: 'Veterito is **not directed at children** and is declared as such in its store listings. This page sets out our standards for preventing child exploitation and how to report it.' },
      { kind: 'text', value: TR_PREVAILS },
    ],
    sections: [
      {
        number: '1', title: 'Age limit',
        blocks: [{ kind: 'list', items: [
          'You must be **at least 13 years old** to create an account.',
          'The content is suitable for a general audience and contains no adult material.',
          'Accounts identified as belonging to someone under 13 are closed and their data deleted.',
          'If you believe a child holds an account, report it to `info@veterito.com`.',
        ]}],
      },
      {
        number: '2', title: 'Zero tolerance',
        blocks: [
          { kind: 'text', value: 'Any material involving or encouraging the sexual abuse or exploitation of children (CSAE/CSAM) is strictly prohibited. When such content is identified:' },
          { kind: 'steps', items: [
            'The content is removed immediately, without waiting for a report.',
            'The account is permanently closed.',
            'Records are preserved as evidence and the competent authorities are notified.',
            'Attempts by the same person to open a new account are blocked.',
          ]},
          { kind: 'text', value: 'This policy applies regardless of the user\'s stated intent or how the content is framed.' },
        ],
      },
      {
        number: '3', title: 'How to report',
        blocks: [
          { kind: 'list', items: [
            '**In the app:** the **⋯** menu next to any post, comment, profile or conversation, then **Report**.',
            '**By email:** `info@veterito.com` with "Child safety" in the subject line. These reports are prioritised.',
            '**In an emergency:** if you believe a child is in immediate danger, call the police first (**155** or **112** in Türkiye, or your local emergency number).',
          ]},
          { kind: 'text', value: 'Child safety reports are reviewed **within 24 hours**. The reporter\'s identity is never shared with the content owner.' },
        ],
      },
      {
        number: '4', title: 'Preventive measures',
        blocks: [{ kind: 'list', items: [
          'Strangers cannot message you directly; a first message waits in **Message Requests** and is limited to one message until accepted.',
          'Any user can block any other; a blocked person cannot find you or write to you.',
          'Profiles can be private by default; the user decides who sees which content.',
          'The app does not collect or display user location.',
          'Every report is reviewed by a human.',
        ]}],
      },
      {
        number: '5', title: 'Responsible contact',
        blocks: [{ kind: 'text', value: 'The platform operator is responsible for child safety reports and for applying these standards. Contact: `info@veterito.com`.' }],
      },
    ],
  },
};
