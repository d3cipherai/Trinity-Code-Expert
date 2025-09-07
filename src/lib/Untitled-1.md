    https://www.sdcard.org/developers/sd-standard-overview/assd/smartsd/
    SD Standard Overview
    SD Family
    Capacity (SD/SDHC/SDXC/SDUC)
    Bus Speed (Default Speed/High Speed/UHS/SD Express)
    SD Express Implementation Overview - In short videos and articles
    SD Express Member Products
    Boot and Extended Security Features (RPMB and TCG)
    Boot (secured and fast)
    TCG
    RPMB
    Speed Class
    Application  Performance Class
    Low Voltage Signaling
    Content Protection
    Host Controllers
    SDIO/iSDIO
    Wireless LAN SD
    TransferJet SD
    ASSD
    smartSD
    Embedded SD
    Application Formats
    SD-Audio
    SD-Video
    SD-Binding
    SD-SD
    SD-SD eBook
    SD Express / UHS-II Verification Program (SVP) Verified Product
    How to Start Using SD Standards in Your Product
    Use and Licensing

smartSD Memory Cards

smartSD memory cards leverage the SD specification’s innovative architecture and allow for communication with an embedded secure element (SE) capable of supporting the GlobalPlatform™ standard and run Javacard™ Applets.

Contactless communication is made possible by using the additional SWP pin that permits a smartSD memory card to take advantage of an NFC-enabled host.

App An application running on the mobile
handset

Applet A Java Card application running on the NFC
SE; also called a cardlet

APDU Command for Java Card applet
(Application Protocol Data Unit)

ASSD Advance Security SD is SDA transport
protocol for APDU

EMVCo Standard body that defined the Contactless
Mobile Payment, Application Activation
User Interface

FIPS Federal Information Processing standard
that defines security certification profile

HCE Host Card Emulation. A function for NFC
device to route Applet calls/commands to
a mobile App

NFC Near Field Communication, a contactless
communication, as defined by ISO18092
standard 18092

Contactless Self-contained microSD card with SE and
smart microSD contactless interface. The contactless
interface (i.e. NFC card emulation) is not
defined by SDA

OTA Over the Air

PPSE Proximity Payment System Environment
defined by EMVco that specifies the
default payment card.

SE Secure Element chip that provides a
secure run time environment approved
for banking Applet
A tamper resistant component used to
provide the security, confidentiality, and
multiple application environments
required to support various business
models.

smartSD smartSD is the general term defined by
SDA for memory card that embeds a SE

SWP Single Wire Protocol that allows interfacing
with NFC front end as defined by ETSI SCP
(TS102 613)

Mobilization of services
With smartphones and super phones becoming widely
available and various app stores making it very easy to
download new applications to any device, consumers now
want all services on a single device which they always carry with
them.

Therefore mobilization of a service is not only a must have
capability but also a strategic move. It is a real opportunity to
create new revenue streams and strengthen customer
relationships while differentiating your offering with a better
user experience and value added services. Mobilization is
typically a real success when taking advantage of the display
and the connectivity of the phone. This is when the end user
value-add shines on top of what contactless card or security
tokens already provide.

As such, mobilization should be carefully
considered and more particularly for services
that involve security such as smartcard,
contactless services and security tokens. 

The choice of SE or no SE could be critical.

Some service requirements would dictate the need for a specific type of SE. 

Such mobilization should be thought through carefully and the choice of form factor for the secure element 
could be critical to keep control of the business model, easily differentiate from competition, and facilitate go-to-market.

There are services using card and security tokens where the
continuity of existing operation process is critical. In that case,
smartSD is a perfect fit as it can use the same distributed
process and channels already in place. smartSD also brings the
value of being a hardware token providing strict control on the
issuing process.

Other services rely on implementation in the app such as HCE.
smartSD is also very relevant for this type of implementation as
it brings increased security to reduce the financial risk and
minimize operation costs. HCE services such as for payment
typically rely on transaction tokens delivered by a server. The
smartSD would typically secure the connection to the server
and provide strong identification. It can also increase the
security of the received tokens and associated rules. As such the
smartSD brings a known level of security into the solution and
increase the security on critical parts. As such the HCE App and
client-server relationship does not need a constant update to
stay ahead of hackers. 

Therefore for these types of services
smartSD is ideal as it doesn’t change the value propositions of
business independence and differentiation provided by HCE
while adding a smart card level of security into the solution.

The development of new features and the release of value
added apps that can reach all customers without any MNO or
handset model limitation is perhaps the biggest value of
smartSD.

The smartSD is the best approach to mobilize security
services by:

• Delivering the largest market reach as more than 78 percent
of mobile phones and thousands of other devices have a
microSD memory card slot
• Working on most users’ current phones independent from
the mobile subscription and operator
• Offering unsurpassed portability and easy transfer by the
consumer to a device of choice
• Allowing familiar issuance processes that fit contactless card
and security token operation and business processes
• Providing an open choice of business models
• Simplifying the launch of services, reducing time to market
and eliminating the need for third parties and for upfront
TSM deployment

The smartSD memory card makes mobilization easier for
service providers/operators who focus on delivering value
propositions.

Once the type of smartSD implementation has been chosen,
launching is very easy as it fits existing business processes
and does not require any agreement with third parties.

Driving market adoption, however, requires understanding
what it takes for consumers to change their habits. This
means understanding their perceived value of the services as
well as knowing what value would inspire them to buy the
service or the smartSD memory card.

Existing cardlets on the SE can be configured or personalized
with a simple data connection to the mobile device.

Overall, GlobalPlatform’s consumer centric approach specifies
all the information and the processes needed to facilitate
such updates or service evolution and work seamlessly with
smartSD.

HCE
HCE allows for software emulation of contactless JavaCard
and is typical of contactless use cases. It is unrelated to
security tokens for mobile application and online services. It
is also specific to JavaCard and may not apply to contactless
solutions with proprietary features such as MIFARE and
DESFire.

Host Card Emulation would not seem to be a target market
for smartSD but once the costs of maintaining HCE services
secure such as for contactless payment are considered,
smartSD can be seen to add significant value to these
implementations.

For example there are HCE solutions that rely on client
server architecture and temporary tokens. Such solutions
are designed around temporary credentials to ensure
strong security is not required to protect them. However
these architectures usually involve connecting to a server to
get the tokens. The App typically authenticates to the
backend or uses some other identification means in order
to identify the user and deliver tokens.

In some implementations protection of those credentials
could cripple the user experience. For example it won’t be
convenient for the end user to have to present his/her PIN
every time new tokens are required. It also will not be
convenient for the end user to enter their credit card
information every time new tokens are required.

In some implementations non repudiation is a must-have
and proper user identification is required. Once again this
could damage the user experience if the user is asked to be
identified too often.

Ideally the connection to the backend should be
transparent to the end user and if possible done at
convenient times, e.g. not at transaction time. However
caching information to maintain a good user experience
requires adequate security. Caching is not optimal when
the number of transactions is unpredictable such as for
transportation or fare-collection systems.

The token server is a great target for hackers and for
impersonation as tokens are personal.

Tokens are also delivered to the device and only protected
in software. This would be another target for hackers who
can get free transactions either by changing the expiration
rules (when applicable) or by using the renewal mechanism
to get more tokens.

In both cases the App is the weakest link because it
contains the information to authenticate to the backend
and the information to access to local tokens. To stay ahead
of hackers, the App must be continuously updated along
with the server side. This represents a large cost as the App
would have to be continuously tested for all supported
phone models. Furthermore the financial risk remains
unknown because software hack could be unpredictable.
Additional software layers such as TEE might help on the
security side but could also increase the cost for a financial
risk that remains unknown as TEE does not have security
certification at the moment.

This is where smartSD becomes valuable for HCE:
• ensure a great user experience
• provide non-repudiation and protection for identity theft
• provide a hardware root of trust that could be
preconfigured for the service
• be pre-personalized to ensure strong authentication to
the backend token server, for example by using PKI as
suggested by Fido.org
• perform strong user identification (protection of PIN,
biometrics match on card, etc), also suggested by
Fido.org
• protect the tokens from the end user

More importantly smartSD reduces the risk to a known
security level as it has already passed adequate security
certification. Therefore smartSD not only helps lower the
financial risk but also reduces operation cost as hackers
would focus on the card rather than the App.

Using smartSD along with HCE gives the best of both
worlds: the flexibility of HCE and great integration in the OS
with all the security of a certified smartcard chip, without
the trouble of implementing a TSM for evolution of the
service or having to sign agreements with all mobile
operators and mobile phone makers.

Payment card
The main revenue from a payment card is typically derived
from serving as a deposit account. Nevertheless, there are
other revenue streams that could cover the costs of issuing
a smartSD memory card:

• When interchange fees are applicable, the cost of a
smartSD memory card with average use is easily paid
back within the first year. Furthermore, interchange fees
revenue could be used to build a cash-back value
proposition to the consumer that could both drive sales
of the card and absorb the entire cost.

• The revenue from a referral program with partners can
also easily pay for the card within a few transactions.
Program partner merchants would pay for customers to
be directed to their stores or services.

• A futuristic business case would capture smartSD
memory card benefits in online payment scenarios
where it could be used for card-present transactions and
for 3D Secure using http(s) as an alternative to
potentially costly SMS.
Transit pass
The ease and convenience delivered by smartSD memory
cards should compel consumers to purchase the smartSD
memory cards. However, some transit services may want to
promote mobile phone usage to save on kiosk costs and to
keep workforce costs low. In that case, a reloading fee
would pay for the smartSD memory card. The consumer
can easily accept a minor fee to take advantage of the
convenience and shorter wait times. A regular user would
pay for the card within the first year.
Transit operators could also consider the additional revenue
opportunity from advertising in the mobile App. As the
smartSD memory card is the sole SE option without
recurring fees, advertising, so revenue stream could recover
the cost of the smartSD before adding to the bottom line.
This example provides real value for local shops and transit
passengers, plus transit traffic numbers would attract
advertisers.

Dematerialized Loyalty card
Dematerialized loyalty cards not only reduce clutter in
users’ wallets, they mobilize smartcard-based loyalty
services by taking advantage of mobile phone
communication channels and localization capabilities. The
first allows for a direct marketing channel that could be
used to increase sales and strengthen the brand and the
second makes it easier to locate a nearby store. While
increased sales would recover the costs of the smartSD
memory card, targeted marketing would also affect
customer retention.

For these programs the embedded SE in the smartSD
memory card could play a role to locally and securely
manage some of the rules so the consumer could redeem
benefits even when offline.

Express check out for Retailers
A basic program for a retail shop to issue smart microSD
memory cards is sustained by the use of a retailer specific
mobile app to leverage shopping lists, target promotions,
and reward loyalty; however, the current programs still
require payment from the user via credit card or cash
transaction. 

A richer approach would also allow shoppers to
use their phone cameras to scan the goods added to their
cart (also allowing for instant promotions) to reduce
checkout time. This richer approach would deliver an
improved shopping experience for the user and require
fewer cashiers for the retailer. Plus, this experience could
also motivate shoppers to buy the smart microSD memory
card to obtain this value-added service.

Parking meter
Contactless communication clearly reduces costs for
parking meter service and maintenance. It facilitates money
collection, reduces vandalism and dramatically lowers
maintenance costs. The mobile app opens a new world of
premium services for users. For example, a typical premium
service uses the mobile app to secure a parking spot.
Additionally, like the transit pass business case, the parking
meter app could be used for highly targeted advertising
based on the user’s parking spot location.

Ticketing / VIP event
This business case is partially supported by reducing time at
event checkpoints. Contactless technology presents many
advantages over other technologies: it works even when it
is dark and does not require a lens to focus, its built-in anti-
cloning/ anti-pass back security enables offline validation,
and the use of contactless communication reduces the risk
of failure as no mechanical parts are involved. Overall, this
new method helps reduce operation costs and, more
significantly, reduces the number of people needed at the
gates to ensure a good user experience.
Users would also gain the option to make purchases from
within the mobile app. The app creates new revenue
generating premium services such as paying extra for VIP
access and paying the issuer a percentage on resold
genuine tickets.

Since the smartSD memory card typically does not present
a reason for recurring fees, a card can be issued once and
used for multiple events by the consumer.

Machine to machine
The smartSD memory card presents the perfect
combination to leverage mass secure storage and a secure
run time environment. One consideration for this business
case is the communication cost savings yielded by using
the smartSD memory card to securely store data for later
transmission during lower cost, low-traffic times.
Another consideration for the business case is in the cost
savings realized on a design that could have lower BOM
costs and the option to adapt the storage capacity to need,
thus optimizing inventory costs.

Hotel room card
Hotels will definitively benefit from the dematerialized
loyalty card business case taking advantage of local
advertising from partnering restaurants, bars and other
local events. It would provide benefit to both service
providers and users.

Additionally, the smartSD memory card with NFC reduces costs
as it decreases staffing required for a good user experience at
check-in and checkout. The user could take advantage of the
hotel booking app to reserve a room and receive the
credentials to access such room directly on its smartSD. Taking
advantage of the smartSD contactless capabilities, the
customer could go direct to his/her room while the booking
system can benefit from strong authentication.
The value add for the consumer could justify the consumer
purchase of a smartSD memory card, yet the cost savings
and the optional revenue opportunities from referring local
partners and advertising also provides a hotel operator with
ROI on the smartSD memory card.

Campus card
The cost of a campus smartSD memory card could easily be
included in the students’ tuition fees since it supports many
use cases such as physical access control to campus premises,
library and other campus assets, remote access to the school
network and online courses, and payment of services and
fees. It could also serve as a payment card for parents
interested in managing their child’s spending, allowing them
to remotely add funds when needed to provide additional
functionality over typical credit/debit card setting.
Some campus usage may generate revenue from this
program. For example, payment could leverage an e-purse
or pre-paid MasterCard or Visa that would generate interest
on the pool of funds, which could help subsidize the cost of
the card. This might be complemented as well by customer
acquisition fees from partner banks.

Universities can also use smartSD cards in the management
of textbooks and related class materials. The smart SD card
can securely load and store required materials for a class in
a format that can be easily accessed by students on the
mobile phones, tablets or laptops. Rental options, where
the materials are only available during the class, are easily
added to this model.

Activating New Mobile Services and Business models with smartSD Memory Cards
www.sdcard.org | ©2014 SD Association. All rights reserved18
Enterprise

The smartSD memory card in the enterprise is a perfect
example of mobilization of services. The smartSD memory
card with NFC can actually address multiple use cases such
as physical access control and IT security, including secure
email on mobile devices, secure data storage and VPN
access. smartSD memory card storage can also be used to
easily move files around the enterprise in a controlled
manner. As such, in the context of mobilization of the
enterprise, the smart microSD memory card with NFC has a
clear business case based on cost savings. First, it does not
have recurring costs unlike many other SEs. Then, it allows
the enterprise to reduce the total cost of ownership by
reducing the number of devices per employee and allowing
use of the employees’ own mobile devices. This move cuts
the cost of VPN tokens, sophisticated contactless badges,
CDs and USB memory sticks, to name a few. Finally, having
an SE entirely controlled by the enterprise adds freedom
and facilitates additional services.

Government / Secure communication
Today’s mobile devices provide the average consumer more
communication abilities than a U.S. president could access
20 years ago. The mobile device is a must-have tool that
provides instant access to most information, which could
be critical in certain situations. So while the potential of
mobile technology should be embraced, it should be very
secure so that sensitive information and communication
remains protected at all times. The cost of compromised
information could have immeasurable consequences. The
smart microSD memory card could be used to provide
secure voice communication, emails and remote access. It
can also secure the data on mobile devices to ensure that
sensitive information is always protected. Furthermore
smartSD meets BYOD requirements.

TSM operator & MNO
There are various business models and opportunities to be
considered by TSM operators and MNOs. Typically, the
smart microSD memory card with NFC could be subsidized
by charging a fee for loading a new applet on the SE. When
charging a one-time fee, a few applets could easily cover
the cost of the smart microSD memory card with NFC.
Rental fees could also be considered as an alternative, but
rental fees could have a more direct impact on the service
provider’s business model. Also, additional revenue sources
are created from managing the applet store and proposing
additional services to the consumer.

When a TSM operator is an MNO, the smart microSD
memory card allows the TSM to expand NFC services
beyond its customers and to acquire subscribers from other
MNOs. Furthermore, the removable smart microSD memory
card allows TSMs to target specific users, keeping upfront
NFC promotion costs very reasonable compared to other
solutions where contactless communication is provided
whether the user needs it or uses it.

Handset bundle
The removability of the smartSD memory card is a key asset
when adapting a global device to local markets, as it
reduces costs through higher production volume. Not only
does the smart microSD memory card allow available
storage capacity to be adapted to the desired level for the
market and price point in regards to the device positioning,
but it also facilitates enabling NFC where needed or
requested by mobile operators. As such, adding smart
microSD memory cards to targeted markets results in
overall cost savings and potentially larger sales revenue
through better market positioning.

Self-service kiosks
At the self-service kiosk – and photo kiosks in particular
since content sizes are growing every day – there is
opportunity for improvement and innovation in the way
content and payment are handled. With smartphones and
other mobile devices emerging as the de-facto content
source, secure payment would significantly improve the
user experience. Today, issues being reported from the
kiosks include growing concerns with respect to user
experience, including issues with Bluetooth™ pairing, cable
management and accessing removable media. These
problems multiply in heavy traffic zones and during peak
engagement times such as the holiday season.

The smartSD memory card also offers additional upselling
opportunities with the availability of additional storage
capabilities. The removable feature offers consumers the
option to store content from other sources like a camera or
another mobile device. At the service point, the content
from these sources can also be used to generate commerce
like the printing of high-resolution pictures at a photo kiosk.
1
Activating New Mobile Services and Business models with smartSD Memory Cards
www.sdcard.org | ©2014 SD Association. All rights reserved19
The service provider could then communicate coupons and
promotional materials based on the user activity. The
presence of an SE in the smartSD memory card helps
validate these upsell items both while dispensing and
consuming them. The idea of a two-way communication
between the SE host and the payment point expands the
prospects for self-service at the kiosk. The limitations of the
current contactless payment tokens are overcome with
smart microSD memory cards.

Pairing of NFC and smartSD memory cards provides a
secure and flexible way for transferring content and
facilitates payment at self-service kiosks. This is an
improvement on the current trend of fragmented services
available to consumers. Providing the consumer with
mobility, flexibility and security, smartSD technology can
hasten the adoption of the mobile device as their payment
source.

The GlobalPlatform Consumer Centric Model provides the
technical framework to connect the token providers and
the service providers in delivering a better retail experience
for the consumers and the service providers and smartSD is
perfectly adapted to take full advantage of this model.
Secure services for multimedia in consumer
devices smartSD memory cards also present a convenient approach
to provide secure services such as payment or user
authentication for HDTV sets, gaming consoles, ebooks and
more.

For example, a smartSD memory card could be used in
gaming to buy credits or additional game tools to move
forward and faster in a game. It can also be used to
authenticate the gamer for online multi-players games or to
easily report success on social networks. Overall, the
smartSD memory card helps protect identity theft, which is
crucial for online gaming where virtual goods are traded.
In the case of HDTV, the smartSD memory card could be
used to create a link between payment and a Digital Rights
Management feature to grant access to multimedia
content. This smart microSD memory card could be
included with the television, allowing support of DRM
systems from different content providers or with the
download of a new DRM system. In that architecture, the
DRM licensing cost is only paid when the smartSD memory
card is present, allowing for lower upfront cost on the
television for customers who are not interested in personal
video recording.

Activating New Mobile Services and Business models with smartSD Memory Cards
www.sdcard.org | ©2014 SD Association. All rights reserved
SD Logos are trademark licensed by SD-3C, LLC
20

Conclusion
The smartSD memory card is the most versatile solution available today to enable
secure mobile services and to support contactless card emulation. It fits numerous
use cases and brings value to both the service provider and the consumer. smartSD
extends the universal, convenient and portable value of SD memory cards to secure
applications and contactless communication services. smartSD memory cards
present the most benefits to mobilize existing services as it fits with existing
business processes and ensures business independence. Plus, a competitive and
thriving ecosystem means smartSD memory cards are available for purchase from
many SDA members.

JCOP Pay operating on JCOP 5 EMV is a
turnkey payment solution with field proven
Java Card OS that comes with a rich set
of applets to support all relevant payment
schemes. In its newest generation it offers
dedicated support for inductive coupling
module solutions, elliptic curve cryptography
as well as post quantum safe encryption
mandated by major payment schemes and
pre-issuance configuration flexibility.
Target Applications
• Approved VISA®, Mastercard®, Discover/Diners Club®
and American Express® applications available
• WLA (White Label Alliance domestic schemes),
qSparc (India), CPACE, JCB, UPI (Union Pay
International, NSICCS (Indonesia) expected end of
2024
• Mastercard ECOS expected by 2025
Features
• Java Card v3.0.5 Classic
• GlobalPlatform®
– GP v2.3 Common Implementation Configuration
v2.0
• ISO 7816-3 T=0, T=1
– Supporting EMVCo SB218 basic ATRs (38400 &
9600 baud)
– Baud rates up to 625000baud
• ISO 14443 (up to 848 kbps)
• Specific tunings for wire bond - and inductive
coupling – modules
• Dual Interface (ISO7816 and ISO14443A) support
• Available Flash memory (up to 200 KB)
• Crypto accelerators DES, TDES 56/112/168 bit, AES256,
256 RSA 2048 (4096) bit, ECC GF (p) 256 bit
• Highly flexible feature and Applet selection for Flash
preloading for customer-specific products
• Additional features via OS Add-on in JCOP 5 EMV
• Support (optional)
– Korean SEED support (optional)
• Global Platform ID Configuration
– RSA Key Generation
Key Benefits
• Optimized transaction performance for inductive
coupling modules
• Ready for future payment scheme security
requirements by supporting elliptic curve
cryptography
• Post quantum computing safe by AES 256
encryption
Fact Sheet
JCOP Pay
Delivering Customization for
Payment Cards with JCOP® Pay
Operating on JCOP 5 EMV®
nxp.com/
NXP, the NXP logo, JCOP, MIFARE and DESFire are trademarks of NXP B.V. All other product or service names are the property of their respective owners.
© 2024 NXP B.V.
Document Number: JCOPPAYFS REV 1
• Efficient inventory management by secure
reconfiguration up to before card issuance stage
• Seamless personalization transition from
predecessor JCOP 4 EMV
• Drop in replacement for existing JCOP 4 solutions
(Pinning compatibility)
JCOP Pay operating on JCOP 5 EMV represents the
newest generation of the JCOP Pay product family
and is built on NXP’s P71D321 Common Criteria EAL
6+ HW platform. In its most recent revision it is ready
made to support future cryptographic requirements
mandated by major payment schemes and supports
post quantum cryptographic resilience by supporting
AES 256 encryption.
Like the predecessor product, JCOP Pay operating
on JCOP 5 EMV comes with a rich set of payment
applications supporting all relevant payment
schemes of the shelf.
JCOP Pay operating on JCOP 5 EMV in its newest
generation has dedicated support for inductive
coupling modules to achieve an optimized
contactless transaction performance.
Finally, its flexible and secure reconfigurability up to
before the card issuance stage allows customers a
maximum flexibility on inventory management and
the ability to respond with a fast time to market on
customization requests of their customers.
Payment Solutions JCOP Pay JCOP PayPlus JCOP Pay (August 2024)
JCOP Version JCOP 4 JCOP 4.5 JCOP 5
Available Memory 200k 450k 200k
Global Platform 2.3 2.3 2.3
Java Card 3.0.5 3.0.5 3.0.5
Target Applications Multi-purpose Payment Extended Feature cards Multi-purpose Payment
Multiple Applets (incl. + payload) Multiple Applets (incl. + payload) Multiple Applets (incl. + payload)
Interface Type
DIF DIF DIF
J3R200 J3R452 J3S200
OS Addons
Korean SEED optional optional optional
MoC optional optional -
MIFARE Plus MIFARE Plus EV1 (optional) MIFARE Plus EV2 -
MIFARE DESFire MIFARE DESFire EV2 (optional) MIFARE DESFire EV3 -
JCOP Pay Portfolio

MCP SDK

Components for building MCP servers and clients that enhance LLM reasoning with custom data, code, and context.
Red Carpet Subscription Vol. 3 2025 - What's New
MCP SDK
Connect LLMs to Your Applications

The Model Context Protocol (MCP) standardizes how large language models interact with external systems, making it possible to expose custom data, functionality, and predefined instructions in a way models can use programmatically. MCP gives you a structured way to connect LLMs to your organization's data, tools, and workflows, making their output more relevant to your specific needs.

MCP SDK is a development library that streamlines implementation of MCP servers and clients. Our components use an intuitive event-driven API that enables LLMs to retrieve relevant data, trigger custom operations, follow reusable instructions, and more. Whether you're building AI agents or integrating LLMs into backend systems, MCP SDK acts as the connective layer between language models and your application logic. MCP SDK supports all major protocol features like tools, sampling, prompts, and resources.

Bi-Directional Communication

MCP SDK enables seamless, two-way communication between your systems and LLMs. MCP servers built with MCP SDK can expose custom functionality, resources, and prompts that LLMs can call in real time. Clients built with MCP SDK act as the bridge between LLMs and those server-side capabilities by initiating requests and retrieving data, functionality, and instructions that reflect your organization’s unique context.

Easy Setup

MCP SDK ensures that interfacing with LLMs is as easy as possible. With just a few basic configuration settings, MCP hosts can launch your MCP server quietly in the background to facilitate communication. Whether you want to communicate over standard input and output or HTTP, MCP SDK minimizes the overhead required to integrate with all standard MCP hosts.
MCP Tool Support

Enable your LLM client to execute custom code by defining Tools available within query contexts.
Flexible Resource Integration

Provide your LLM with data through user-defined data Resources. Serve data from a file, database, cloud repository, and more.
Pre-Defined Prompts

Template common LLM prompts for reusability, with support for dynamic arguments and resource contexts.
Sample LLM Logic in Code

Bi-directional integration with your LLM client means you can query LLM reasoning within your Tools and custom code.
Uniform & Extensible Design

Very easy to use, with a uniform, intuitive, and extensible design. Common component interfaces across platforms and technologies.
Fully Integrated Components

Native software components for any supported development technology - with no dependencies on external libraries.
Online Resources

    Getting Started Guides:
    MCP Server
    Connect to Claude
    See more...
    Online Documentation
    Knowledge Base
    Software License

    MCP Server
    Tools
    Resources
    Sampling
    Prompts

Red Carpet Vol. 3 2025 Now Available
New Tools for AI Integration, NFC Communication, PDF Creation and Editing, Cloud Spreadsheet Integration, SFTP Server Hosting, and More

The latest Red Carpet Subscription update includes the new MCP SDK toolkit for AI Integration with LLMs, IPWorks NFC for Near Field Communication on Android and iOS, and Cloud Sheets for integrating spreadsheet management into your apps. Additionally, Secure PDF has been updated with support for ZUGFeRD invoices, editing PDFs, and automated form filling and PKI Agent for in-browser signing using system certificates has been fully released.

Download MCP SDK or read the update highlights.
Product Features

MCP SDK includes an MCP Server component for building customized MCP servers that facilitate bi-directional communication with LLM clients.

    Full support for all major MCP features, including resources, prompts, sampling, and tools.
    Simplified handling of MCP server events through a simple, intuitive component API.
    Flexible server implementation allows for custom logic to determine what resources your LLM can access.
    Supports standard input and output channels as well as HTTP.
    Enable LLM access to your applications' unique data and logic.
    Make custom application logic callable by LLMs.
    Works seamlessly with existing MCP hosts like Claude Desktop, Cursor, VS Code, and more.
    A complete unified framework with a common, easy-to-learn object model and simplified interfaces that enable you to do more.
    Components are thread-safe on critical members.
    Fast, robust, reliable components that consume minimal resources.
    Native development components for all supported platforms and technologies.
    Rigorously tested, rock solid libraries that have undergone hundreds of thousands of hours of testing both internally by our QA team and externally through customer installations.
    Detailed reference documentation, sample applications, fully-indexed help files, and an extensive online knowledge base.
    Backed by multi-tier professional support, including free email support and enterprise-level paid support.

Supported Platforms

    .NET
    Java

.NET .NET Framework & Cross-platform Components

Based on a 100% C# codebase, with no dependencies on native code. The edition of choice for all .NET applications.
.NET

Cross-platform support for Windows, Linux, macOS, and anywhere .NET is supported. Due to OS limitations, not all features are available on all operating systems. Native libraries are also available for individual platforms.

    Fully-managed .NET components written in C#.
    Support for .NET 9, .NET 8, .NET 6, .NET 5, .NET Core 3.1, and earlier.
    Support for .NET Framework 2.0 - 4.8.
    Works with Xamarin and MAUI via .NET 6.
    .NET Standard 2.0 and 2.1 support.
    Fully asynchronous API available.
    Cross-platform support.
    Support for Windows IoT.
    Comprehensive integrated product documentation.
    Seamless integration with Visual Studio.
    Extensive sample applications written in C#.

Components for Model Context Protocol

The following components are included in MCP SDK. Please note that due to platform limitations, some components may not be available in all editions.
MCPClient MCPClient
MCPServer MCPServer
Included Samples

The following sample projects are installed with the product. Please download the trial to get started.

    MCP Server

    Shows how to use the MCPServer component to provide tools, resources, and prompts ...
    Java, .NET
    Download

Download Beta
Fully-Functional Free Beta (90-Day Expiration)

Get started today and see why developers worldwide
choose /n software components.
3DS Server Libraries and Mobile SDKs

New! The 3-D Secure Server components now support version 2.3.1 of the EMV® 3-D Secure protocol. Read our what's new in 3DS 2.3.1 article for more details.

3DS Server and mobile SDKs are EMVCo Certified and listed on the EMVCo Approved Products list; 3DS Mobile SDKs are also PCI 3DS SDK Certified and are listed on the 3DS Software Development Kits (3DS SDK) list.

/n software 3-D Secure is a Certified EMV® 3-D Secure library offering support for Visa Secure, MasterCard Identity Check, American Express SafeKey, Discover ProtectBuy, and J/Secure. The toolkit allows easy integration into online shopping carts, websites, and merchant systems, while providing extraordinary flexibility to software developers through easy to use component interfaces.
EMVCo Approved
Visa Secure
ID Check
Protect Buy
Safe Key
JCB

EMV® 3-D Secure, also known as EMV 3DS or 3DS V2, is an authentication protocol defined by EMVCo and has been designed for modern customer environments, including browsers and mobile devices. The refined customer experience reduces friction during checkout and bolsters fraud protection by analyzing additional customer data when authenticating card holders.

    Details about EMV® 3-D Secure can be found at the EMVCo 3-D Secure site.
    For more information about Visa Secure see the Visa Secure Services site.
    Additional links and information about MasterCard Identity Check can be found at the MasterCard Identity Check homepage.
    American Express SafeKey information can be found online at the American Express SafeKey site.
    Discover ProtectBuy information can be found online at the Discover ProtectBuy site.
    JCB J/Secure information can be found online at the JCB J/Secure product page. 

3-D Secure iOS and Android SDKs are also PCI 3DS SDK Certified. /n software is one of only three vendors whose products have attained this certification; the list can be viewed at 3DS Software Development Kits (3DS SDK). This certification is granted after a PCI 3DS SDK Lab tests mobile SDKs for security objectives and other specifications. A description of the PCI 3DS SDK program can be read at PCI 3-D Secure Software Development Kit (3DS SDK) Program Now Available.

Hosting Options

When the Transport property is set to ttHTTP, the MCPServer class may be hosted via an external server framework like ASP.NET Core, via an embedded HTTP server, or in a fully offline mode. The ProcessingMode property should be set according to the type of hosting option used. Possible hosting options are:

    Embedded Server
    External Server
    Offline Mode

The following aspects of class use and behavior are impacted by hosting options:

    Processing Inbound Requests
    Authentication
    Configuration Requirements
    Connection Security
    Sending Responses

Embedded Server

Processing Inbound Requests

When functioning in embedded server mode, the component's StartListening method causes the embedded web server to begin listening for inbound MCP requests. The LocalHost and LocalPort fields must be set prior to starting the server.

C#

 Copy
if (procmode == MCPServerProcessingModes.modeEmbeddedServer) 
{
  server.ServerSettings.LocalHost = "localhost";
  server.ServerSettings.LocalPort = "80";
  server.StartListening();
}

The StopListening method disconnects any connected clients and stops listening.

Configuration Requirements

The embedded server's behavior is configured via the ServerSettings property and the ServerCert property. These settings control the local interface and port on which the server listens, as well as the allowed authentication methods.

Authentication

When hosting MCPServer using the embedded web server, the AllowedAuthMethods field determines which authentication schemes the embedded server will allow.

Connection Security

When using the embedded server, the server hosts a plaintext (HTTP) endpoint by default. The ServerCert property is used to enable TLS for secure connections. When ServerCert is set to a TLS certificate, the embedded HTTP server will use and require TLS for inbound HTTPS connections.

Sending Responses

The type of HTTP response generated by the class depends on logic that occurs within events that fire as the class processes requests.

After processing a request, the class automatically sends an HTTP response according to the MCP standard. Errors are reported to the client via HTTP error responses, and success is reported via 200 OK. The contents of the response depend on the specific operation performed.

External Server

Processing Inbound Requests

When functioning in external server mode, the external server framework listens for HTTP requests. The HttpContext object must be passed explicitly to the class to process the request.

Authentication

Authentication occurs outside the scope of MCP SDK when using the external server mode. Prior to passing the Request to the class via ProcessRequest, the incoming request should be authenticated using the appropriate mechanism. For instance, an ASP.NET Core application may require basic or NTLM authentication to access the endpoint where the request will be processed. Once the request has been authenticated through external verification, the Request should be passed to the ProcessRequest method.

Configuration Requirements

External servers may require configuration such that MCP requests can be passed to MCP SDK. The details depend on the framework used to build the external server.

Java Servlets

The server is compatible with standard implementations of HttpServlet, if they pass all requests to the service() method.

Connection Security

When hosting the class via an external server, the security settings in the external server framework determine connection security. The class has no impact on TLS in this processing mode.

Sending Responses

The type of HTTP response generated by the class depends on logic that occurs within events that fire as the class processes requests.

When calling the ProcessRequest method, an HttpResponse object should be passed as a method parameter (as well as the HttpRequest). The class will populate the response object with the status code, headers, and body generated while processing the request. The Java servlet can then use this object to return the response to the connected client.

Offline Mode

Processing Inbound Requests

When functioning in offline mode, the class uses the Request and RequestHeaders properties to read inbound requests. These properties should be set to the request body and headers, respectively, before processing the request by calling the ProcessRequest method with null Request and Response parameters.

In offline mode, the class will not attempt to send a response to clients. Instead, the Response and ResponseHeaders properties are set to the body content and headers, respectively, of the response.

Authentication

Authentication is fully outside the scope of the class when using offline mode. The class will process requests without any direct checks for authentication.

Configuration Requirements

In offline mode, the class is agnostic to any process that occurs prior to setting the Request and RequestHeaders properties, and as such does not require any additional configuration.

Connection Security

In offline mode, the class does not have a live connection to a client, so connection security is not directly relevant to the class's operation.

Sending Responses

The type of HTTP response generated by the class depends on logic that occurs within events that fire as the class processes requests.

After processing a request in offline mode, the class will populate the Response and ResponseHeaders properties with the content of the response. This data can be extracted from these properties and returned to the client using whatever approach is appropriate. 


VISA Fintech Fast Track
A program designed to help fintech and crypto companies bring new payments solutions to market.
Apply Now https://partner.visa.com/site/programs/fintech-program.html

Benefits for approved Fintechs include:

    Reduced Expenses – From our world-class marketing solutions to risk and fraud expertise, tap into valuable Visa services that help you develop your strategy, manage your portfolio, and launch your product in the most cost-effective way.
    Expedited onboarding – Leverage Visa’s relationships with enablement partners (e.g., BIN sponsors, processors, and/or program managers) for accelerated program review and ramp.
    Cohort Benefits – Access exclusive resources, free trials on select solutions, and preferred terms with Visa’s select network of referral partners.

*The Visa Direct Fintech Fast Track program is currently only available in the United States. For other countries, please apply to the program and provide your detailed use case.
Join a vast global network
We value our partnerships and strive to help our Fintech Fast Track companies grow and scale their businesses over time.
4.1B

cards worldwide1
200+

countries & territories
$14.1T

total volume
80M+

Fill out all the necessary details. You may qualify if you are:

    A registered corporation in your region
    In good financial standing
    Not an existing Visa member
    New to card issuance
    Have raised at least $3M in funding

Review

We’ll review your application based on the outlined criteria and determine whether to proceed. Your enablement partner will also review your application according to their criteria.
Approval

Once you are approved, you can start onboarding with Visa and enjoy the program benefits*.

*Program benefits may vary from region to region depending on where you are launching your product.
Go to Market

Implement and test your solution knowing you’ve got one of the world’s largest payment networks behind you.
Get in Touch!

Have a new idea? Don’t know where to begin? Just want to talk?
Contact Us
Let's do this!

Create an account. It just takes a few minutes. 

We'll follow up with you - and guide you through your next steps.
Apply Now

Third Party Agent Registration

Third party agents (TPAs), fintechs, gateways, service providers, third party processors, etc. all provide payment services to merchants or Visa Client sponsors like issuers and acquirers to support card transactions. Agents perform certain payment-related functions, such as processing transactions, managing chargebacks, and monitoring fraud.

Agents are required to get registered to help establish trust and accountability in the payment industry. It is important for merchants who are looking to work with an agent that they have clarity around the processing flow and want to ensure all parties involved are working together in a compliant manner. By getting registered with Visa, agents are provided a TPA Business ID (BID) and gain access to Visa's suite of payment products and services to expand their product offerings.
How do I get registered?

A new self-service tool is available for agents to use through Visa Partner. The tool offers a streamlined, online registration process that enables you to complete the registration form quickly and easily. The tool provides greater transparency into the process, enabling you to track your progress and receive support when needed. There are a couple of options when it comes to registration:

    Through a Visa Client sponsor: Most agents need a Visa Client sponsor to get registered. A Visa Client sponsor serves as a liaison between you and Visa and are responsible for ensuring that you meet Visa's eligibility requirements and comply with the Visa Rules and local regulations. Having a sponsor is important for agents, especially if you are new to the payments industry and may not be familiar with the requirements and regulations associated with the program. Additionally, having a sponsor can provide a level of credibility and assurance to merchants and other stakeholders who work with you.
    
    Register directly with Visa: A new option available to agents is to register directly with Visa. Agents operating independently who would like to enroll onto a Visa product or service that does not require Visa Client sponsorship may register directly with Visa. The Visa product team overseeing the service you are enrolling in will assist you in determining if a Visa Client sponsor is required during onboarding.

Tool Capabilities
Register with an existing Visa Client sponsor

If you have already contracted with a Visa Client sponsor, you may register with them using this tool.
Establish a relationship with a Visa Client sponsor

If you provide merchant services, but do not have a contract with an acquirer or know which acquirer should register you, you may be connected to one through the tool.
Register with Visa

If you would like to enroll onto a Visa product/service and do not work with a Visa Client sponsor, you may register directly with Visa.

Visa Technology Partner
Administrative Processing Fees
New Vendor Registration
Processing fee for new registration USD $3000
Agreement Processing
Processing fee for Specification License USD $1500
Processing fee for Software License USD $1500
Processing fee for Mobile Software License USD $1500


Developing the startups driving technologies of the future

At NXP, we have a strong conviction: the future of technology is increasingly taking place at the edge.

The cloud is in the past. At NXP, we have a strong conviction: the future of technology is at the edge. We work every day to make that happen and startups developing edge devices are instrumental in this vision of the future.

That’s why we proactively engage with startups who can help bring high-performance edge computing, AI, and secure connectivity to vehicles, homes, factories, logistics and healthcare. Whether you’re at seed stage, early prototyping stage, or already going through a growth phase, you can receive support from NXP to overcome your biggest challenges and achieve your business goals faster.
Startup Program Benefits
Strategic partnership opportunities
Technical ecosystem expertise
Dedicated program for proof of concepts
Go-to-market support
Great network across the semiconductor industry
Possibility to engage in long-term innovation projects
Empowering startups at every stage
Seed

Turn your prototype into a Minimum Viable Product (MVP) with NXP. At Seed stage, your focus is on laying the foundation of success for your product to achieve product-market fit. To help you transform your prototype into an MVP, our Startup Program offers:

Technical developer support​

Go-to-market support​

Networking opportunities​

Enhance your MVP’s product features and scale with NXP. Whether you're enhancing features, refining product-market fit, or scaling operations to expand market reach, we support your next phase of growth. Our Startup Program offers:

Technical developer support​

Market-leading solutions​

Strategic partnership opportunities​

We Aspire to Partner with Startups

Together we accelerate the breakthroughs that advance our world. NXP’s Startup Program is particularly beneficial for startups in the following sectors:
Automotive
Industrial
Healthcare

Active in one of these market verticals? Contact us to see how NXP’s Startup Program can accelerate your development. Apply now
What our Startup Partners are saying:
Entry Requirements

There are 3 common eligibility criteria applicable to all startups wanting to join the NXP Startup Program, regardless of what stage they’re at:

    Your startup must be a registered business with a legal entity
    Your startup must serve any of these market verticals: automotive, industrial, healthcare.
    Communication: Proficiency in English is essential and a key requirement for effective communication with representatives of our global 	Startups Program

Seed stage startups

Seed stage startups must have already received first-round funding from a reputable incubator or accelerator as a minimum. In terms of maturity, your startup must have a functioning prototype and a solid business model.

Early-stage startups

Early-stage startups must have completed Series A funding and already developed a minimum viable product which has a strong base of early adopters.

Note: Please note that submitting your application does not automatically guarantee acceptance into our Startups Program. Each application will undergo a thorough assessment to evaluate potential synergies before any decision is taken.
Selection Process

    1 PROPOSAL SUBMISION

    The journey begins with the submission of an application. Startups are invited to provide detailed information about their business, including their value proposition, target market, and stage of development. This can be done through our online application form.

    2 INITIAL SCREENING

    Our team conducts an initial screening of all applications to ensure they meet the basic criteria of the program. This includes alignment with NXP’s focus sectors (automotive, industrial, smart home, smart city, and healthcare) as well as alignment of our visions. We’ll get back to you within 3 working days of your submission with the outcome of our decision.

    3 DISCOVERY CALL

    If your proposal passes the initial screening stage, we’ll hold a discovery call with you and other relevant members of your team. This involves a thorough analysis of the startup’s technology, market potential, business model, and team. We also consider the strategic fit with NXP’s business objectives.

    4 ALIGNMENT

    If our paths converge, we’ll then discuss the scope and benefits of our collaboration through the startup program as well as define the terms of engagement. This includes setting clear milestones and deliverables to ensure a mutually beneficial partnership.

    5 COLLABORATION

    We’ll onboard your team into the program and bring our teams together to execute the project to help you accelerate your development and achieve your business goals.

Apply now
https://www.nxp.com/company/about-nxp/startups-x-nxp/startups-program:WF_STARTUPS?SAMLart=ST-AAF0E3YJDJej%2BJVBprc7Vu5rkUdez1%2FZbNJU1aa1q5aB1hfe8tCyk8RU


