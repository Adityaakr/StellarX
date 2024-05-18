# StellarX

**Imagine a world where communication transcends borders, data flows freely, and assets move seamlessly.** Introducing StellarX, a revolutionary **modular asset sharing layer** built on the robust foundation of Stellar. 

![image](https://github.com/Adityaakr/StellarX/assets/128833380/a6cbc2b7-de0d-454a-8051-e1175f789920)


[Screencast from 18-05-24 04:34:33 PM IST.webm](https://github.com/Adityaakr/StellarX/assets/128833380/bf6e316e-7814-41d9-aafb-53cb743d4a4d)
]

## Overview

**StellarX** is a modular asset-sharing layer built on the Stellar blockchain. It allows users to seamlessly share, trade, and manage Messages and Transactions with enhanced security and scalability. This project leverages Stellar's robust network to offer fast and low-cost transactions, making it an ideal platform for decentralized applications.

**Why we need StellarX?**

# StellarX: Unified Communication & Transactions

- Combines communication & finance in one platform.
- Affordable because - On chain (Authen) and Off-chain (Messaging) through various External messaging apps.
- Enhances financial inclusion with secure transactions.
- Empowers users with data control via decentralized storage. (IPFS & FileCoin)


## Features

- **Modular Design**: Easily extend and customize functionalities to suit different needs.
- **Secure Transactions**: Built on the Stellar network ensuring high security and reliability.
- **Low-Cost Operations**: Take advantage of Stellar's low transaction fees.
- **Modular Scalable Infrastructure**: Designed to handle a growing number of transactions and users efficiently.

**Technology Stack**

* **Frontend Development:** soroban-react, Typescript , Nextjs , Chakra-UI
* **Smart Contract Development:** Soroban SDK, Rust

**Integration with soroban-react**

This project utilizes soroban-react to establish a seamless connection between your React frontend and the Soroban smart contracts. soroban-react provides functionalities such as:

* Connecting to a Soroban network
* Interacting with deployed smart contracts
* Managing user accounts and wallets

**Getting Started**

1. **Prerequisites:**
    * Node.js and npm (or yarn) installed on your system
    * A Soroban development environment set up (refer to Soroban documentation)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- Preferred package manager (pnpm, npm, or yarn).

## Installation

To set up the STELLARX dApp on your local machine, follow these steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/Adityaakr/StellarX.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd StellarX
    ```

3. **Install dependencies**

    Using pnpm:

    ```bash
    pnpm install
    ```

    Alternatively, you can use npm or yarn:

    ```bash
    npm install
    ```

    ```bash
    yarn install
    ```

4. **Build the project**

    Using pnpm:

    ```bash
    pnpm run build
    ```

    Alternatively, you can use npm or yarn:

    ```bash
    npm run build
    ```

    ```bash
    yarn build
    ```
    
To run the development server with experimental features, update the `package.json` file as follows:

1. Open `package.json` in your favorite text editor.
2. Modify the `scripts` section to include the experimental server setup:

    ```json
    "scripts": {
      "dev": "next dev --experimental-https"
    }
    ```

3. Start the development server:

    Using pnpm:

    ```bash
    pnpm run dev
    ```

    Alternatively, you can use npm or yarn:

    ```bash
    npm run dev
    ```

    ```bash
    yarn dev
    ```

## Usage

Once the server is running, you can access the dApp via your browser at `http://localhost:3000`. From there, you can explore and interact with the various features of the STELLARX platform.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

Happy coding with STELLARX!
