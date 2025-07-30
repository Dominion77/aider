import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiShoppingCart, FiSearch, FiFilter, FiChevronDown, FiStar, FiX, FiPlus, FiMinus, FiCreditCard, FiArrowLeft, FiCheck } from 'react-icons/fi';
//import { useAuth } from '../components/contexts/AuthContext';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const StoreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;

  h1 {
    font-size: 32px;
    color: #2563eb;
    font-weight: 700;
  }
`;

const SearchFilterContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 0 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    border: none;
    padding: 12px;
    font-size: 16px;
    outline: none;
    background: transparent;
  }

  svg {
    color: #64748b;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
  }
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 2s infinite;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    animation: none;
    transform: none;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${slideUp} 0.5s ease-out;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
`;

const ProductImage = styled.div`
  height: 200px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProductBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #10b981;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const ProductDetails = styled.div`
  padding: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #1e293b;
  }

  p {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  color: #f59e0b;

  span {
    color: #64748b;
    font-size: 14px;
  }
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  .price {
    font-size: 20px;
    font-weight: 700;
    color: #2563eb;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8fafc;
  padding: 5px 10px;
  border-radius: 8px;
  
  button {
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: #e2e8f0;
    }
  }
  
  span {
    min-width: 20px;
    text-align: center;
    font-weight: 600;
  }
`;

const CheckoutModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const CheckoutContainer = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  position: relative;
  animation: ${slideUp} 0.4s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #64748b;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  color: #3b82f6;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e2e8f0;

  .item-info {
    display: flex;
    align-items: center;
    gap: 15px;
    flex: 1;
  }

  .item-image {
    width: 60px;
    height: 60px;
    background: #f1f5f9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-details {
    flex: 1;
    
    h4 {
      margin-bottom: 5px;
    }
    
    .price {
      color: #2563eb;
      font-weight: 600;
    }
  }

  .item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
  }
`;

const CheckoutSummary = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e2e8f0;

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 5px 0;
    
    &.subtotal {
      border-bottom: 1px dashed #e2e8f0;
    }
    
    &.total {
      font-weight: 700;
      font-size: 18px;
      color: #1e293b;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #e2e8f0;
    }
  }
`;

const PaymentForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const ConfirmationMessage = styled.div`
  text-align: center;
  padding: 40px 20px;

  .icon {
    width: 80px;
    height: 80px;
    background: #10b981;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 40px;
    animation: ${pulse} 2s infinite;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: #1e293b;
  }

  p {
    color: #64748b;
    font-size: 16px;
    line-height: 1.6;
    max-width: 500px;
    margin: 0 auto 30px;
  }
`;

const ShippingInfo = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;

  h3 {
    margin-bottom: 15px;
    color: #1e293b;
  }
  
  p {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    
    span:first-child {
      font-weight: 500;
      color: #475569;
    }
    
    span:last-child {
      font-weight: 600;
      color: #1e293b;
    }
  }
`;

const MedicalStore = () => {
  //const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'shipping', 'payment', 'confirmation'
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: 'Nigeria'
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  useEffect(() => {
    
    const mockProducts = [
      {
        id: 1,
        name: 'Premium First Aid Kit',
        description: 'Comprehensive first aid kit with 150 pieces for all emergency needs',
        price: 49.99,
        rating: 4.8,
        image: '/images/first aid.jpg',
        isNew: true,
        category: 'First Aid'
      },
      {
        id: 2,
        name: 'Digital Thermometer',
        description: 'Fast and accurate digital thermometer with fever alarm',
        price: 19.99,
        rating: 4.5,
        image: '/images/thermometer.jpg',
        category: 'Diagnostic'
      },
      {
        id: 3,
        name: 'Blood Pressure Monitor',
        description: 'Automatic upper arm blood pressure monitor with large display',
        price: 59.99,
        rating: 4.7,
        image: '/images/monitor.jpg',
        category: 'Monitoring'
      },
      {
        id: 4,
        name: 'Pulse Oximeter',
        description: 'Fingertip pulse oximeter with OLED display for SpO2 and PR',
        price: 29.99,
        rating: 4.6,
        image: '/images/oximeter.jpg',
        category: 'Monitoring'
      },
      {
        id: 5,
        name: 'Compression Bandage',
        description: 'Elastic compression bandage for sprains and strains (3 pack)',
        price: 12.99,
        rating: 4.3,
        image: '/images/compression.jpg',
        category: 'Wound Care'
      },
      {
        id: 6,
        name: 'Medical Gloves (Box of 100)',
        description: 'Latex-free disposable gloves for medical use',
        price: 14.99,
        rating: 4.4,
        image: '/images/gloves.jpg',
        category: 'Protective'
      },
      {
        id: 7,
        name: 'Reusable Cold Pack',
        description: 'Flexible cold therapy pack for injuries and pain relief',
        price: 8.99,
        rating: 4.2,
        image: '/images/cold-pack.jpg',
        category: 'Therapy'
      },
      {
        id: 8,
        name: 'Stethoscope Professional',
        description: 'Dual-head stethoscope for accurate auscultation',
        price: 39.99,
        rating: 4.9,
        image: '/images/stethoscope.jpg',
        category: 'Diagnostic'
      }
    ];
    setProducts(mockProducts);
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shippingCost = 5.99;
  const taxRate = 0.08;
  
  const calculateTax = () => {
    return calculateSubtotal() * taxRate;
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + shippingCost + calculateTax();
  };

  const handleCheckout = () => {
    setOrderConfirmed(true);
    // In a real app, you would send the order to your backend here
    setTimeout(() => {
      setCheckoutStep('confirmation');
    }, 3000);
  };

  const completeOrder = () => {
    setShowCheckout(false);
    setCheckoutStep('cart');
    setCart([]);
    setOrderConfirmed(false);
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StoreContainer>
      <StoreHeader>
        <h1>Medical Supplies Store</h1>
        <SearchFilterContainer>
          <SearchBar>
            <FiSearch />
            <input
              type="text"
              placeholder="Search for medical supplies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>
          <FilterButton>
            <FiFilter /> Filter <FiChevronDown />
          </FilterButton>
        </SearchFilterContainer>
      </StoreHeader>

      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0' }}>
        <CartButton 
          onClick={() => setShowCheckout(true)}
          disabled={cart.length === 0}
        >
          <FiShoppingCart /> View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </CartButton>
      </div>

      <ProductsGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              <div style={{
                width: '80%',
                height: '80%',
                background: '#dbeafe',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6',
                fontWeight: 'bold',
                fontSize: '14px',
                textAlign: 'center',
                padding: '10px'
              }}>
                {product.name}
              </div>
              {product.isNew && <ProductBadge>NEW</ProductBadge>}
            </ProductImage>
            <ProductDetails>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ProductRating>
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <span>{product.rating}</span>
                </ProductRating>
                <span style={{ 
                  background: '#e0f2fe', 
                  color: '#1d4ed8',
                  padding: '4px 8px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {product.category}
                </span>
              </div>
              <ProductFooter>
                <div className="price">${product.price.toFixed(2)}</div>
                <button 
                  className="btn-primary" 
                  onClick={() => addToCart(product)}
                  style={{ padding: '10px 16px' }}
                >
                  <FiShoppingCart /> Add to Cart
                </button>
              </ProductFooter>
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductsGrid>

      {showCheckout && (
        <CheckoutModal>
          <CheckoutContainer className="glass">
            <CloseButton onClick={() => setShowCheckout(false)}>
              <FiX />
            </CloseButton>

            {checkoutStep === 'cart' && (
              <>
                <h2>Your Shopping Cart</h2>
                {cart.length === 0 ? (
                  <p style={{ textAlign: 'center', padding: '40px 0' }}>Your cart is empty</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <CartItem key={item.id}>
                        <div className="item-info">
                          <div className="item-image">
                            <div style={{
                              width: '40px',
                              height: '40px',
                              background: '#dbeafe',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#3b82f6'
                            }}>
                              {item.name.split(' ').map(w => w[0]).join('')}
                            </div>
                          </div>
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <div className="price">${item.price.toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="item-actions">
                          <QuantityControl>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                              <FiMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <FiPlus />
                            </button>
                          </QuantityControl>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                            <FiX />
                          </button>
                        </div>
                      </CartItem>
                    ))}

                    <CheckoutSummary>
                      <div className="summary-row subtotal">
                        <span>Subtotal:</span>
                        <span>${calculateSubtotal().toFixed(2)}</span>
                      </div>
                      <div className="summary-row">
                        <span>Shipping:</span>
                        <span>${shippingCost.toFixed(2)}</span>
                      </div>
                      <div className="summary-row">
                        <span>Tax (8%):</span>
                        <span>${calculateTax().toFixed(2)}</span>
                      </div>
                      <div className="summary-row total">
                        <span>Total:</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                      </div>
                    </CheckoutSummary>

                    <button 
                      className="btn-primary" 
                      style={{ width: '100%', marginTop: '20px' }}
                      onClick={() => setCheckoutStep('shipping')}
                    >
                      Proceed to Shipping
                    </button>
                  </>
                )}
              </>
            )}

            {checkoutStep === 'shipping' && (
              <>
                <BackButton onClick={() => setCheckoutStep('cart')}>
                  <FiArrowLeft /> Back to Cart
                </BackButton>
                
                <h2>Shipping Information</h2>
                <p>Enter your shipping details</p>
                
                <PaymentForm>
                  <Input 
                    type="text" 
                    placeholder="Full Name" 
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleShippingChange}
                    required 
                  />
                  <Input 
                    type="text" 
                    placeholder="Address" 
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    required 
                  />
                  <InputGroup>
                    <Input 
                      type="text" 
                      placeholder="City" 
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      required 
                    />
                    <Input 
                      type="text" 
                      placeholder="ZIP Code" 
                      name="zip"
                      value={shippingInfo.zip}
                      onChange={handleShippingChange}
                      required 
                    />
                  </InputGroup>
                  <Input 
                    type="text" 
                    placeholder="Country" 
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    required 
                  />
                  
                  <button 
                    className="btn-primary" 
                    type="button"
                    onClick={() => setCheckoutStep('payment')}
                    style={{ width: '100%', marginTop: '10px' }}
                  >
                    Continue to Payment
                  </button>
                </PaymentForm>
              </>
            )}

            {checkoutStep === 'payment' && (
              <>
                <BackButton onClick={() => setCheckoutStep('shipping')}>
                  <FiArrowLeft /> Back to Shipping
                </BackButton>
                
                <h2>Payment Information</h2>
                
                <ShippingInfo>
                  <h3>Shipping to:</h3>
                  <p>
                    <span>Name:</span>
                    <span>{shippingInfo.name}</span>
                  </p>
                  <p>
                    <span>Address:</span>
                    <span>{shippingInfo.address}</span>
                  </p>
                  <p>
                    <span>City:</span>
                    <span>{shippingInfo.city}, {shippingInfo.zip}</span>
                  </p>
                  <p>
                    <span>Country:</span>
                    <span>{shippingInfo.country}</span>
                  </p>
                </ShippingInfo>
                
                <PaymentForm>
                  <Input 
                    type="text" 
                    placeholder="Card Number" 
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                    required 
                  />
                  <InputGroup>
                    <Input 
                      type="text" 
                      placeholder="MM/YY" 
                      name="expiry"
                      value={paymentInfo.expiry}
                      onChange={handlePaymentChange}
                      required 
                    />
                    <Input 
                      type="text" 
                      placeholder="CVV" 
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handlePaymentChange}
                      required 
                    />
                  </InputGroup>
                  <Input 
                    type="text" 
                    placeholder="Name on Card" 
                    name="name"
                    value={paymentInfo.name}
                    onChange={handlePaymentChange}
                    required 
                  />
                  
                  <button 
                    className="btn-primary" 
                    type="button"
                    onClick={handleCheckout}
                    style={{ width: '100%', marginTop: '10px' }}
                    disabled={orderConfirmed}
                  >
                    {orderConfirmed ? 'Processing...' : 'Complete Purchase'}
                  </button>
                </PaymentForm>
              </>
            )}

            {checkoutStep === 'confirmation' && (
              <ConfirmationMessage>
                <div className="icon">
                  <FiCheck />
                </div>
                <h2>Order Confirmed!</h2>
                <p>
                  Thank you for your purchase! Your order #{
                    Math.floor(Math.random() * 1000000)
                  } has been placed successfully.
                </p>
                <p>
                  We've sent a confirmation email with your order details and tracking information.
                </p>
                
                <div style={{ textAlign: 'left', maxWidth: '500px', margin: '30px auto' }}>
                  <h3>Order Summary:</h3>
                  <p><strong>Items:</strong> {cart.reduce((total, item) => total + item.quantity, 0)}</p>
                  <p><strong>Total:</strong> ${calculateTotal().toFixed(2)}</p>
                  <p><strong>Shipping to:</strong> {shippingInfo.name}, {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.country}</p>
                </div>
                
                <button 
                  className="btn-primary" 
                  onClick={completeOrder}
                >
                  Continue Shopping
                </button>
              </ConfirmationMessage>
            )}
          </CheckoutContainer>
        </CheckoutModal>
      )}
    </StoreContainer>
  );
};

export default MedicalStore;
