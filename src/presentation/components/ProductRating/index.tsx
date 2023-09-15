import "./styles.css"; // Estilo CSS para o componente de classificação

type props = {
  rating?: number;
};
export const ProductRating = ({ rating }: props) => {
  // A função renderStars renderiza as estrelas com base na classificação

  const renderStars = () => {
    const stars = [];
    if (rating !== undefined) {
      // Verifica se rating não é undefined
      for (let i = 1; i <= 5; i++) {
        // Verifica se a estrela atual deve ser amarela (ativa) ou cinza (inativa)

        const starClassName = i <= rating ? "star active" : "star";
        stars.push(
          <span key={i} className={starClassName}>
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="product-rating">{renderStars()}</div>;
};
