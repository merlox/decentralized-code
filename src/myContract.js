const address = "0x76d039fc9f955f1e6555a959f436da8f48c3f75e"
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fileName",
				"type": "string"
			},
			{
				"name": "_code",
				"type": "string"
			}
		],
		"name": "addCode",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userCode",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "fileName",
				"type": "string"
			},
			{
				"name": "code",
				"type": "string"
			},
			{
				"name": "owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export {address, abi}
