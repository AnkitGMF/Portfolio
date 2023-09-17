import validator from 'validator';
import isEmpty from '@/utils/is-empty';


const validateAndSanitizeContactForm = ( data:any ) => {
	
	let errors:any = {};
	let sanitizedData:any = {};
	
	
	data.message = ( ! isEmpty( data.message ) ) ? data.message : '';
	data.name = ( ! isEmpty( data.name ) ) ? data.name : '';
	data.email = ( ! isEmpty( data.email ) ) ? data.email : '';
	
	const addErrorAndSanitizedData = ( fieldName:string, errorContent:string, min:number, max:number, type = '', required:boolean ) => {
		
		
		if ( ! validator.isLength( data[ fieldName ], { min, max } ) && required ){
			errors[ fieldName ] = `${errorContent} must be ${min} to ${max} characters`;
		}
		
		if ( 'email' === type && ! validator.isEmail( data[ fieldName ] ) ){
			errors[ fieldName ] = `${errorContent} is not valid`;
		}
		
		if ( 'url' === type && ! validator.isURL( data[ fieldName ] ) && required ){
			errors[ fieldName ] = `${errorContent} is not valid`;
		}
		
		if ( required && validator.isEmpty( data[ fieldName ] ) ) {
			errors[ fieldName ] = `${errorContent} is required`;
		}
		
		// If no errors
		if ( ! errors[ fieldName ] ) {
			sanitizedData[ fieldName ] = validator.trim( data[ fieldName ] );
			sanitizedData[ fieldName ] = ( 'email' === type ) ? validator.normalizeEmail( sanitizedData[ fieldName ] ) : sanitizedData[ fieldName ];
			sanitizedData[ fieldName ] = validator.escape( sanitizedData[ fieldName ] );
		}
		
	};
	
	addErrorAndSanitizedData( 'message', 'Message', 5, 500,'string',true );
	addErrorAndSanitizedData( 'name', 'Name', 2, 35, 'string', true );
	addErrorAndSanitizedData( 'email', 'Email', 11, 254, 'email', true );
	
	
	return {
		sanitizedData,
		errors,
		isValid: isEmpty( errors )
	}
};

export default validateAndSanitizeContactForm;
