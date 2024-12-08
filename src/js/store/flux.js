const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			agenda: "my_agenda",
			demo: []
		},
		actions: {
			getContacts: async () => {
				const store = getStore();
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`);
					if(!resp.ok){
						throw new Error ('Http error! status: ${resp.status}');
					}
					const data = await resp.json();
					setStore({contacts: data.contacts});
				} catch (error) {
					console.error("Error loading contacts", error);
					
				}
			},
			addContact: async (contact) => {
				const store = getStore ();
				try {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`,{
					method: "POST",
					body: JSON.stringify(contact),
					headers: {'Content-Type' : 'application/json'}

				});
				if(!resp.ok){
					throw new Error ('Http error! status: ${resp.status}');
				}
				await getActions().getContacts();
			} catch (error) {
				console.error("Error adding contacts", error);
				
			}
			},

			updateContact: async (id, updateContact) => {
				const store = getStore ();
				try {
				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`,{
					method: "PUT",
					body: JSON.stringify(updateContact),
					headers: {'Content-Type' : 'application/json'}	
			
					
				});
				if(!resp.ok){
					throw new Error ('Http error! status: ${resp.status}');
				}
				await getActions().getContacts();
			} catch (error) {
				console.error("Error updating contacts", error);
				
			}
			},

			deleteContact: async(id) => {
				const store = getStore ();
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`,{
						method: "DELETE"
					});
					if(!resp.ok){
						throw new Error ('Http error! status: ${resp.status}');
					}
					await getActions().getContacts();
				} catch (error) {
					console.error("Error deleting contacts", error);
				}
			}

			// Use getActions to call a function within a fuction
		
			// loadDemoData: async () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
				
			// 	const store = getStore();
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
