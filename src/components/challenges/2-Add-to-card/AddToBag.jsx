import React from 'react';
import '../../../styles/2-add-to-card/AddToBag.css';

const shop = [{
  shopName: "Zara",
  message: {
    description: "El contenido ha sido obtenido de ZARA Oficial",
    url: "https://www.zara.com/es/es/mono-manga-sisa-pierna-balloon-p08119730.html?v1=369278207&v2=2419517"
  },
  clothes: {
    monosisa: {
      id: 1,
      brand: "Zara",
      model: "MONO MANGA SISA PIERNA BALLOON",
      description: "Mono de cuello solapa y manga sisa. Bolsillos delanteros y bolsillos de plastrón en espalda. Detalle de trabillas laterales con botones en cintura. Pierna globo con el bajo acabado recto. Cierre frontal con cremallera y botones.",
      price: 39.99,
      discount: 25,
      sizes: ["XS", "S", "M", "L"],
      images: [
        {
          id: 1,
          url: "https://static.zara.net/assets/public/0202/91f1/39504494980d/e8bba604bf48/08119730658-p/08119730658-p.jpg?ts=1721812331445&w=563"
        },
        {
          id: 2,
          url: "https://static.zara.net/assets/public/dae3/9eee/0abc4cacb2c5/9b555cef7d11/08119730658-a1/08119730658-a1.jpg?ts=1721812331676&w=563"
        },
        {
          id: 3,
          url: "https://static.zara.net/assets/public/aa21/4d0b/adf94bab8f99/48b66fe790a3/08119730658-e1/08119730658-e1.jpg?ts=1722001009288&w=563"
        },
        {
          id: 4,
          url: "https://static.zara.net/assets/public/5ea8/4856/58b043b9b27e/bd45960dedd2/08119730658-e2/08119730658-e2.jpg?ts=1721837394422&w=563"
        },
        {
          id: 5,
          url: "https://static.zara.net/assets/public/9358/5fd4/82064973966a/d7b78ae01aab/08119730658-e3/08119730658-e3.jpg?ts=172183739978"
        },
        {
          id: 6,
          url: "https://static.zara.net/assets/public/3aa7/0bff/bf38465b867d/b4d36f656a9a/08119730658-e4/08119730658-e4.jpg?ts=1721837402895&w=563"
        }
      ]
    }
  }
}];

export default function AddToBag() {
  const { shopName, message, clothes } = shop[0];
  const { monosisa } = clothes;

  return (
    <article className="add-to-bag">
      <section>
        {/* galeria de imagenes */}
        <div className='galery'>
          {
            monosisa.images.map((image) => (
              <img width={100}  key={image.id} src={image.url} alt={monosisa.model} />
            ))
          }

        </div>
        <div className='img-full'>

        </div>

      </section>
      <section>
        {/* descripcion y datos del producto */}
        <h2>{monosisa.model}</h2>

      </section>

    </article>
  );
}
