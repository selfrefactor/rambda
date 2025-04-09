class Z{
	string(){
		return {
			parse: (input: string) => input,
			optional: () => ({
				parse: (input: string) => input,
			}),
			nullable: () => ({
				parse: (input: string) => input,
			}),
			default: () => ({
				parse: (input: string) => input,
			}),
			transform: () => ({
				parse: (input: string) => input,
			}),
		}
	}
}

const z = new Z();