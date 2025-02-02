import { useState } from "react";
import { Input } from "../Input";
import { Form, Button, Container } from "react-bootstrap";
import {
    validateName,
    validateDescription,
    validateCategory,
    validateBrand,
    validatePrice,
    validateInventory,
    validateImage,
    validateAvailability,
    nameValidateMessage,
    descriptionValidateMessage,
    categoryValidateMessage,
    brandValidateMessage,
    priceValidateMessage,
    inventoryValidateMessage,
    imageValidateMessage,
    availabilityValidateMessage,
} from "../../shared/validators";
import { useAddProduct } from "../../shared/hooks/useAddProduct";

export const AddProduct = ({ switchProductHandler }) => {
    const { addProduct, isLoading } = useAddProduct();

    const [formState, setFormState] = useState({
        name: { value: "", isValid: false, showError: false },
        description: { value: "", isValid: false, showError: false },
        category: { value: "", isValid: false, showError: false },
        brand: { value: "", isValid: false, showError: false },
        price: { value: "", isValid: false, showError: false },
        inventory: { value: "", isValid: false, showError: false },
        image: { value: "", isValid: false, showError: false },
        availability: { value: "", isValid: false, showError: false },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "name":
                isValid = validateName(value);
                break;
            case "description":
                isValid = validateDescription(value);
                break;
            case "category":
                isValid = validateCategory(value);
                break;
            case "brand":
                isValid = validateBrand(value);
                break;
            case "price":
                isValid = validatePrice(value);
                break;
            case "inventory":
                isValid = validateInventory(value);
                break;
            case "image":
                isValid = validateImage(value);
                break;
            case "availability":
                isValid = validateAvailability(value);
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleAddProduct = (event) => {
        event.preventDefault();
        addProduct(
            formState.name.value,
            formState.description.value,
            formState.category.value,
            formState.brand.value,
            formState.price.value,
            formState.inventory.value,
            formState.image.value,
            formState.availability.value
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.name.isValid ||
        !formState.description.isValid ||
        !formState.category.isValid ||
        !formState.brand.isValid ||
        !formState.price.isValid ||
        !formState.inventory.isValid ||
        !formState.image.isValid ||
        !formState.availability.isValid;

    return (
        <Container className="mt-4">
            <Form onSubmit={handleAddProduct}>
                <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.name.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "name")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "name")}
                        isInvalid={formState.name.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {nameValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.description.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "description")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "description")}
                        isInvalid={formState.description.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {descriptionValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="category" className="mb-3">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.category.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "category")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "category")}
                        isInvalid={formState.category.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {categoryValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="brand" className="mb-3">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.brand.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "brand")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "brand")}
                        isInvalid={formState.brand.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {brandValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="price" className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        value={formState.price.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "price")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "price")}
                        isInvalid={formState.price.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {priceValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="inventory" className="mb-3">
                    <Form.Label>Inventario</Form.Label>
                    <Form.Control
                        type="number"
                        value={formState.inventory.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "inventory")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "inventory")}
                        isInvalid={formState.inventory.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {inventoryValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="image" className="mb-3">
                    <Form.Label>URL de Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.image.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "image")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "image")}
                        isInvalid={formState.image.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {imageValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="availability" className="mb-3">
                    <Form.Label>Disponibilidad</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.availability.value}
                        onChange={(e) => handleInputValueChange(e.target.value, "availability")}
                        onBlur={(e) => handleInputValidationOnBlur(e.target.value, "availability")}
                        isInvalid={formState.availability.showError}
                    />
                    <Form.Control.Feedback type="invalid">
                        {availabilityValidateMessage}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitButtonDisabled}
                    className="w-100"
                >
                    {isLoading ? "Cargando..." : "Agregar Producto"}
                </Button>
            </Form>
        </Container>
    );
};