import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Create this component separately
import Loader from './Loader'; // Create this component separately

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        description: '',
        price: '',
        final_price: '',
        initial_price: '',
        image_url: '',
        images: '',
        category: '',
        department: '',
        manufacturer: '',
        country_of_origin: '',
        features: '',
        delivery: '',
        top_review: '',
        rating: '',
        reviews_count: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingId) {
                await axios.put(`http://127.0.0.1:8000/api/products/${editingId}`, formData);
            } else {
                await axios.post('http://127.0.0.1:8000/api/products', formData);
            }
            fetchProducts();
            resetForm();
            setShowModal(false);
        } catch (error) {
            console.error('Error saving product:', error);
        }
        setLoading(false);
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            await axios.delete(`http://127.0.0.1:8000/api/products/${deleteId}`);
            fetchProducts();
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting product:', error);
        }
        setLoading(false);
    };

    const handleEdit = (product) => {
        setFormData(product);
        setEditingId(product.id);
        setShowModal(true);
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const resetForm = () => {
        setFormData({
            title: '',
            brand: '',
            description: '',
            price: '',
            final_price: '',
            initial_price: '',
            image_url: '',
            images: '',
            category: '',
            department: '',
            manufacturer: '',
            country_of_origin: '',
            features: '',
            delivery: '',
            top_review: '',
            rating: '',
            reviews_count: ''
        });
        setEditingId(null);
    };

    return (
        <div className="p-6">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Product Management</h1>
                        <button 
                            onClick={() => {
                                resetForm();
                                setShowModal(true);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Add New Product
                        </button>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img 
                                                src={product.image_url} 
                                                alt={product.title}
                                                className="h-16 w-16 object-cover rounded"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{product.brand}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">${product.final_price}</div>
                                            {product.initial_price !== product.final_price && (
                                                <div className="text-xs text-gray-500 line-through">${product.initial_price}</div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <span className="text-yellow-400">★</span>
                                                <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
                                                <span className="ml-1 text-sm text-gray-400">({product.reviews_count})</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{product.department}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{product.customer_says}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button 
                                                onClick={() => handleEdit(product)}
                                                className="text-blue-600 hover:text-blue-900 mr-3"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDeleteClick(product.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Edit/Add Modal */}
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title={editingId ? 'Edit Product' : 'Add New Product'}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        {/* Add other form fields similarly */}
                    </div>
                    <div className="flex justify-end gap-4 mt-4">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                title="Confirm Delete"
            >
                <div className="p-6">
                    <p className="mb-6">Are you sure you want to delete this product?</p>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => setShowDeleteModal(false)}
                            className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            disabled={loading}
                        >
                            {loading ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminDashboard;