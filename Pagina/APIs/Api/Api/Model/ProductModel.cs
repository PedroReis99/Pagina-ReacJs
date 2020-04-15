using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Model
{
    public class ProductModel
    {

        [Key]

        public int Id { get; set; }

        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 4 e 60 caracteres")]
        [MinLength(4, ErrorMessage = "Este campo deve conter entre 4 e 60 caracteres")]

        public string Nome { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório!")]

        public decimal Valor { get; set; }
    }
}
