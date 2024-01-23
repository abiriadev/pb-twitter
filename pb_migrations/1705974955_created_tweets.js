/// <reference path="../pb_data/types.d.ts" />
migrate(
	db => {
		const collection = new Collection({
			id: 'd5oii1zl2614dv0',
			created: '2024-01-23 01:55:55.684Z',
			updated: '2024-01-23 01:55:55.684Z',
			name: 'tweets',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'sgvilfom',
					name: 'tweet',
					type: 'text',
					required: false,
					presentable: false,
					unique: false,
					options: {
						min: null,
						max: null,
						pattern: '',
					},
				},
				{
					system: false,
					id: 'gfiljlmn',
					name: 'author',
					type: 'relation',
					required: false,
					presentable: false,
					unique: false,
					options: {
						collectionId: '_pb_users_auth_',
						cascadeDelete: false,
						minSelect: null,
						maxSelect: 1,
						displayFields: null,
					},
				},
			],
			indexes: [],
			listRule: '',
			viewRule: '',
			createRule: '@request.auth.id != ""',
			updateRule: '@request.auth.id = author',
			deleteRule: '@request.auth.id = author',
			options: {},
		})

		return Dao(db).saveCollection(collection)
	},
	db => {
		const dao = new Dao(db)
		const collection = dao.findCollectionByNameOrId(
			'd5oii1zl2614dv0',
		)

		return dao.deleteCollection(collection)
	},
)
