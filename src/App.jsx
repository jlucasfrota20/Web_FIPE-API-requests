import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const anoCopy = new Date().getFullYear()

	const [marca, setMarca] = useState([])
	const [modelo, setModelo] = useState([])
	const [ano, setAno] = useState([])
	const [preco, setPreco] = useState(null)
	const [msg, setMsg] = useState("")

	const [marcaId, setMarcaId] = useState("");
  	const [modeloId, setModeloId] = useState("");
  	const [anoId, setAnoId] = useState("");

	useEffect(() => {
		const fetchMarca = async () => {
			try {
				const marcas = await axios.get("https://brasilapi.com.br/api/fipe/marcas/v1/carros")
				setMarca(marcas.data)
			} catch (error) {
				console.error("Erro ao buscar as MARCAS na API da FIPE: ", error)
			}
		}

		fetchMarca()
	}, [])

	useEffect(() => {
		if (!marcaId) return

		async function fetchModelo() {
			try {
				const modelos = await axios.get(`https://brasilapi.com.br/api/fipe/veiculos/v1/carros/${marcaId}`)
				setModelo(modelos.data)

				setModeloId("")
				setAnoId("")
				setPreco(null)
			} catch (error) {
				console.error("Erro ao buscar os MODELOS na API da FIPE: ", error)
			}
		}

		fetchModelo()
	},[marcaId])

	useEffect(() => {
		if (!marcaId || !modeloId) return

		async function fetchAno() {
			try {
				const anos = await axios.get(`https://brasilapi.com.br/api/fipe/anos/v1/carros/${marcaId}/${modeloId}`)
				setAno(anos.data)

				setAnoId("")
				setPreco(null)
			} catch (error) {
				console.error("Erro ao buscar os ANOS na API da FIPE: ", error)
			}
		}

		fetchAno()
	},[modeloId])

	async function fetchPreco(e) {
		e.preventDefault()

		if (!marcaId || !modeloId || !anoId) {
			alert('Selecione a marca, o modelo e o ano.')
			return
		}

		try {
			const res = await axios.get(`https://brasilapi.com.br/api/fipe/detalhes/v1/carros/${marcaId}/${modeloId}/${anoId}`)
			
			setPreco({
				...res.data
			})

			/*
			# ESTRUTURA BASE DO RESULDADO DA REQUISIÇÃO
			{
				"valor": "R$ 72.976,00",
				"marca": "BMW",
				"modelo": "118iA Full 1.6 TB 16V 170cv 5p",
				"anoModelo": 2014,
				"combustivel": "Gasolina",
				"codigoFipe": "009169-3",
				"mesReferencia": "outubro de 2026",
				"tipoVeiculo": 1,
				"siglaCombustivel": "G"
			}
			*/

			setMsg(`Preço do Veículo: ${res.data.valor}`)
		} catch (error) {
			setPreco(null)
			console.error("Erro ao buscar o preço:", error)
			alert("Erro ao consultar a base da FIPE. Tente novamente.")
		}
	}

	return (
		<>
		<header>
			<h1><abbr title="Fundação Instituto de Pesquisas Econômicas">FIPE</abbr> <span>APIrequests</span></h1>
		</header>
		<main>
			<p>Busque preços de veículos com o <abbr title="Fundação Instituto de Pesquisas Econômicas">FIPE</abbr> APIrequests. Selecione a marca, o modelo e o ano. Com isso, encontre os preços médios desses <span className="main">CARROS</span> no Brasil.</p>

			<form action="" onSubmit={fetchPreco}>
			<div className="formulario">
				<label htmlFor="marca">Marca</label>
				<select name="marca" id="marca" value={marcaId} onChange={(e) => setMarcaId(e.target.value)}>
					<option value="" disabled selected>1. Selecione a Marca</option>
					{marca.map(v => <option key={v.valor} value={v.valor}>{v.nome}</option>)}
				</select>

				<label htmlFor="modelo">Modelo</label>
				<select name="modelo" id="modelo" value={modeloId} onChange={(e) => setModeloId(e.target.value)} disabled={!marcaId}>
					<option value="" disabled>2. Selecione o Modelo</option>
					{modelo.map(v => <option key={v.valor} value={v.valor}>{v.modelo}</option>)}
				</select>

				<label htmlFor="ano">Ano</label>
				<select name="ano" id="ano" value={anoId} onChange={(e) => setAnoId(e.target.value)} disabled={!modeloId}>
					<option value="" disabled>3. Selecione o Ano</option>
					{ano.map(v => <option key={v.valor} value={v.valor}>{v.nome}</option>)}
				</select>
			</div>

			<button type="submit" id="submit">PROCURAR PREÇO</button>
			</form>
			
			{preco && 
				<div id="flex">
					<div id="resultado">
						<p>{msg}</p>
					</div>
				</div>
			}
		</main>
		<footer>
			<p>&copy; {anoCopy} FIPE APIrequests</p>
		</footer>
		</>
	)
}

export default App