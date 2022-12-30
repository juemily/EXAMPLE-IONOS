import React, { useRef, useState  } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { TiDeleteOutline } from 'react-icons/ti';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import emailjsFORM from '@emailjs/browser';
import Link from 'next/link';


function Cart() {
  const cartRef = useRef();

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.clear()
    const productFormElement = document.getElementById("productForm")
    const modalContent = document.getElementById("modalbody");
    const modalSuccess = document.getElementById("modalsuccess");
    emailjsFORM.sendForm('service_bs6cy74','template_3bi30nc',productFormElement,'ZSH1QynXp8eDCntUc')
      .then(response => {
        modalContent.classList.add("hide");
        modalSuccess.classList.remove("hide");
      })
      .catch(
        error => console.log(error)
        )
    console.log('end')
};
     
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
      <button type='button' className='cart-heading' onClick={()=> setShowCart(false)}>
        <AiOutlineLeft/>
        <span className='heading'>Su Carro de Compra</span>
        <span className='cart-num-items'>({totalQuantities} items)</span>
      </button>
      <div className="cart-items__container">
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>No hay elementos en el carro de compras</h3>
            <Link href="/">
              <button type="button" onClick={() => setShowCart(false)} className="btn" >
                Continuar con la compra
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length > 0 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img src={item?.image_external_url} className="cart-product-image" />
                <div className="item-desc">
                  <div>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }><AiOutlineMinus /></span>
                      <span className="num" >{item.quantity}</span>
                      <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                    </p>
                    </div>
                    <button type="button" className="remove-item" onClick={() => onRemove(item)} >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
        {cartItems.length >=1 &&(
          <div className='cart__footer'>
            <div className='total'>
              <h3> Subtotal : </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn focus-button' onClick={handleShow}> Realizar Pedido </button>
            </div>
          </div>
        )}
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal__header">Enviar Pedido a la Tienda</Modal.Title>
          <TiDeleteOutline/>
        </Modal.Header>
        <Modal.Body id="modalbody">
          <Form className="modal__form" id="productForm">
            <div className="modal__form-fields">
            <Form.Group className="modal__form-input" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Su nombre" autoFocus name="form_name" />
              </Form.Group>
              <Form.Group className="modal__form-input" controlId="exampleForm.ControlInput1">
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo electrónico" autoFocus name="form_email" />
              </Form.Group>
              <Form.Group className="modal__form-input" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" placeholder="ingrese su mensaje" name="message"/>
              </Form.Group>
            </div>
            <div className="modal__form-products">
              <span className="modal_product-list-title">Listado de productos a comprar</span>
              <ul>
                {cartItems.length >= 1 && cartItems.map((item, index) => (
                  <li>
                    <span>{item.name}</span>
                    <input type="hidden" name="product_reference" value={item.factory_reference}/>
                    <input type="hidden" name="product_name" value={item.name}/>
                  </li>
                  ))}
              </ul>
            </div>

          </Form>
          <Modal.Footer>
            <Button className="normal-button" variant="secondary" onClick={handleClose}>  Cerrar </Button>
            <Button className="focus-button" variant="primary" type="submit" name="submit" onClick={handleSubmit}> Enviar Datos </Button>
          </Modal.Footer>
        </Modal.Body>
        <div id="modalsuccess" className="modal__succes-body hide">
          <h3>¡Gracias por su Compra!</h3>
          <p className="email-msg">Nos pondremos en contacto para que pueda retirar su pedido</p>
          <p className="description">
            Si tiene alguna duda por favor, enviar un mail a: 
            <a href='mailto:LAMPARASPADILLA@GMAIL.COM'>LAMPARASPADILLA@GMAIL.COM</a>
          </p>
          <a className="map-img__link" href="https://goo.gl/maps/zyTRLp8DWZvELBKb6" target="_blank">
          </a>
          <Link href="/">
            <button type="button" width="300px" className="btn focus-button">
              Continuar Comprando
            </button>
          </Link>
        </div>
      </Modal>

    </div>
    
  )
  
}

export default Cart