import { useState } from "react";
const BasicReact = () => {
    const [name, setName] = useState("Dani");
    const [angka, setAngka] = useState(0);
    const [hasil, setHasil] = useState()

    const ubahNama = () => {
        setName(oldName => oldName + " Musang");
    }

    const tambahAngka = () => {
        setAngka(angkaAwal => angkaAwal + 1)
    }

    const kurangAngka = () => {
        setAngka(angkaAwal => angkaAwal - 1)
    }

    const change = (e) => {
        setHasil(Number(e.target.value));
    }

    const tampilAngka = () => {
        setAngka(angkaAwal => angkaAwal + hasil)
    }

    return (
        <div>
    //   <h1>Hello {name}</h1>
    //   <button onClick={ubahNama}> Ubah Nama</button>
    //   <h1>{angka}</h1>
    //   <button onClick={tambahAngka}>+</button>
    //   <button onClick={kurangAngka}>-</button>
    //   <br />
    //   <input onChange={change} type="number" placeholder="Masukkan nilai tambah"></input>
    //   <button onClick={tampilAngka}>Tambah</button>
    // </div>
    )
}

export default BasicReact;