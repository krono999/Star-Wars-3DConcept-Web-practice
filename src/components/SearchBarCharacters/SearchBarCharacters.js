import ReactSearchBox from "react-search-box";

export default function SearchBarCharacters({ characters }) {
    return (
        <ReactSearchBox
            placeholder="Buscar"
            // data={[
            //     {
            //         key: "john",
            //         value: "John Doe"
            //     },
            //     {
            //         key: "jane",
            //         value: "Jane Doe"
            //     },
            //     {
            //         key: "mary",
            //         value: "Mary Phillips"
            //     },
            //     {
            //         key: "robert",
            //         value: "Robert"
            //     },
            //     {
            //         key: "karius",
            //         value: "Karius"
            //     }
            // ]}
            data={[
                {
                    // key: "Nombre",
                    // value: {characters.name}
                },
                { characters }
            ]}
            // onSelect={(record: any) => console.log(record)}
            onFocus={() => {
                console.log("This function is called when is focussed");
            }}
            onChange={(value) => console.log(value)}
            autoFocus
            iconBoxSize="48px"
        />
    );
}